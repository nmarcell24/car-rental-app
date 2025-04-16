package  autoberlo.autoberlo.auth;


import  autoberlo.autoberlo.token.JWTTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.OK;

/**
 * Custom filter for handling JWT-based authorization in HTTP requests.
 * <p>
 * This filter checks for the presence of a valid JWT token in the "Authorization"
 * header of incoming requests. If the token is valid and the user is not already authenticated,
 * it sets the authentication context for the current request.
 * </p>
 *
 * <p>
 * The filter only processes non-OPTIONS HTTP methods. If the request method is OPTIONS (used for CORS preflight),
 * it simply responds with an OK (200) status code.
 * </p>
 *
 * Example flow:
 * <ol>
 *     <li>The filter checks if the "Authorization" header is present and starts with "Bearer ".</li>
 *     <li>If the token is valid, the filter extracts the username and authorities from the token.</li>
 *     <li>The filter then creates an authentication object and sets it in the security context.</li>
 *     <li>If the token is invalid, the security context is cleared.</li>
 * </ol>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Component
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    /**
     * The JWT token provider for validating and parsing JWT tokens.
     */
    private JWTTokenProvider jwtTokenProvider;

    /**
     * The HTTP method used for CORS preflight requests.
     */
    public static final String OPTIONS_HTTP_METHOD = "OPTIONS";

    /**
     * Prefix for the Bearer token in the "Authorization" header.
     */

    public static final String TOKEN_PREFIX = "Bearer ";

    /**
     * Constructor for JwtAuthorizationFilter.
     *
     * @param jwtTokenProvider The JWT token provider used to validate tokens.
     */

    public JwtAuthorizationFilter(JWTTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }


    /**
     * The core logic of the filter that processes the incoming HTTP request.
     *
     * <p>
     * If the method is OPTIONS, the filter responds with an OK (200) status.
     * If the method is not OPTIONS, the filter checks for a valid JWT token in the "Authorization" header.
     * If a valid token is found, the user is authenticated and the security context is set.
     * </p>
     *
     * @param request  The incoming HTTP request
     * @param response The HTTP response
     * @param filterChain The filter chain to pass the request and response through
     * @throws ServletException If an error occurs during filtering
     * @throws IOException If an error occurs during filtering
     */

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        if (request.getMethod().equalsIgnoreCase(OPTIONS_HTTP_METHOD)) {
            response.setStatus(OK.value());
        } else {
            String authorizationHeader = request.getHeader(AUTHORIZATION);
            if (authorizationHeader == null || !authorizationHeader.startsWith(TOKEN_PREFIX)) {
                filterChain.doFilter(request, response);
                return;
            }
            String token = authorizationHeader.substring(TOKEN_PREFIX.length());
            String username = jwtTokenProvider.getSubject(token);
            if (jwtTokenProvider.isTokenValid(username, token) && SecurityContextHolder.getContext().getAuthentication() == null) {
                List<GrantedAuthority> authorities = jwtTokenProvider.getAuthorities(token);
                Authentication authentication = jwtTokenProvider.getAuthentication(username, authorities, request);
                SecurityContextHolder.getContext().setAuthentication(authentication);
            } else {
                SecurityContextHolder.clearContext();
            }
        }
        filterChain.doFilter(request, response);
    }
}
