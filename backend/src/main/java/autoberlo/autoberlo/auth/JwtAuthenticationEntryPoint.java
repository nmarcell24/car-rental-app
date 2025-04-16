package autoberlo.autoberlo.auth;

import com.fasterxml.jackson.databind.ObjectMapper;
import  autoberlo.autoberlo.dto.ExceptionResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.OutputStream;

import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * Custom implementation of {@link Http403ForbiddenEntryPoint} that is triggered
 * when an unauthenticated user attempts to access a protected resource.
 * <p>
 * This handler returns a structured JSON error response with details about the
 * authentication failure, including the HTTP status code, status type, and a
 * human-readable error message.
 * </p>
 *
 * Example of the returned JSON:
 * <pre>
 * {
 *   "statusCode": 403,
 *   "httpStatus": "FORBIDDEN",
 *   "reason": "FORBIDDEN",
 *   "message": "You need to log in to access this page"
 * }
 * </pre>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Component
public class JwtAuthenticationEntryPoint extends Http403ForbiddenEntryPoint {

    /**
     * Default error message returned when an unauthenticated user tries
     * to access a protected resource.
     */
    public static final String FORBIDDEN_MESSAGE = "You need to log in to access this page";


    /**
     * Handles authentication failures by writing a JSON response containing
     * details about the failure.
     *
     * @param request   The current HTTP request
     * @param response  The response to write to
     * @param exception The thrown {@link AuthenticationException}
     * @throws IOException if an error occurs while writing the response
     */
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        ExceptionResponse exceptionResponse = new ExceptionResponse(FORBIDDEN.value(), FORBIDDEN, FORBIDDEN.getReasonPhrase().toUpperCase(), FORBIDDEN_MESSAGE);
        response.setContentType(APPLICATION_JSON_VALUE);
        response.setStatus(FORBIDDEN.value());
        OutputStream outputStream = response.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(outputStream, exceptionResponse);
        outputStream.flush();
    }
}