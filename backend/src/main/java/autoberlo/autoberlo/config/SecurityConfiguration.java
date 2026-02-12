package autoberlo.autoberlo.config;

import autoberlo.autoberlo.auth.JwtAccessDeniedHandler;
import autoberlo.autoberlo.auth.JwtAuthenticationEntryPoint;
import autoberlo.autoberlo.auth.JwtAuthorizationFilter;
import jakarta.servlet.DispatcherType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import static org.springframework.security.config.Customizer.withDefaults;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

/**
 * Security configuration class that sets up authentication, authorization,
 * and JWT-based security for the application.
 * <p>
 * This configuration class handles HTTP security, such as defining the rules for
 * which users can access which endpoints, setting up JWT-based authentication,
 * and managing session creation. It also configures password encoding using BCrypt.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfiguration {
    private final JwtAuthorizationFilter jwtAuthorizationFilter;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final UserDetailsService userDetailsService;
    private BCryptPasswordEncoder passwordEncoder;


    public static final String[] PUBLIC_URLS = {
            "/swagger-ui/**", "/swagger-resources/**",
            "/v2/api-docs", "/v3/api-docs", "/v3/api-docs/**",
            "/user/login", "/user/create", "/car/list", "/car/{id}", "/user/list", "/allocate/create", "allocate/list"

    };

    /**
     * Constructor to initialize necessary components for security configuration.
     *
     * @param jwtAuthorizationFilter the JWT authorization filter
     * @param jwtAccessDeniedHandler the handler for access denied exceptions
     * @param jwtAuthenticationEntryPoint the entry point for unauthorized access
     * @param userDetailsService the user details service for loading user data
     * @param passwordEncoder the password encoder for hashing passwords
     */

    @Autowired
    public SecurityConfiguration(JwtAuthorizationFilter jwtAuthorizationFilter,
                                 JwtAccessDeniedHandler jwtAccessDeniedHandler,
                                 JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
                                 @Qualifier("userDetailsService") UserDetailsService userDetailsService,
                                 BCryptPasswordEncoder passwordEncoder) {

        this.jwtAuthorizationFilter = jwtAuthorizationFilter;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Bean definition for the AuthenticationManager.
     *
     * @param http the HttpSecurity object for building the authentication manager
     * @return an instance of AuthenticationManager
     * @throws Exception if an error occurs during authentication manager setup
     */

    @Bean
    public AuthenticationManager getAuthenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService);
        return authenticationManagerBuilder.build();
    }

    /**
     * Bean definition for the SecurityFilterChain.
     * Configures security rules, JWT authentication filter, and session management.
     *
     * @param http the HttpSecurity object for configuring HTTP security
     * @return an instance of SecurityFilterChain
     * @throws Exception if an error occurs during HTTP security setup
     */

   import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import java.util.Arrays;
import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;
// ... keep your other imports (DispatcherType, HttpMethod, etc.)

@Configuration
public class SecurityConfig {

    // ... keep your injections (jwtAuthorizationFilter, etc.) ...

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            // 1. Explicitly use the CORS source defined below
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(request -> request
                .dispatcherTypeMatchers(DispatcherType.FORWARD, DispatcherType.ERROR).permitAll()
                // .requestMatchers(PUBLIC_URLS).permitAll() // Ensure PUBLIC_URLS is defined or remove this
                .requestMatchers("/user/login").permitAll()
                .requestMatchers(HttpMethod.POST, "/loan/create").hasAnyAuthority("CREATE_LOAN")
                .requestMatchers(HttpMethod.GET, "/loan/list").hasAnyAuthority("LIST_LOANS")
                .requestMatchers(HttpMethod.POST, "/car/create").hasAnyAuthority("CREATE_CAR")
                .requestMatchers(HttpMethod.PUT, "/user/{id}").hasAnyAuthority("UPDATE_USER")
                .requestMatchers(HttpMethod.GET, "/user/{id}").hasAnyAuthority("READ_USER")
                .requestMatchers(HttpMethod.DELETE, "/car/{id}").hasAnyAuthority("DELETE_CAR")
                
                // Allow OPTIONS requests (Pre-flight checks) for everyone
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults())
            .formLogin(withDefaults())
            .exceptionHandling(exception -> exception
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)
            )
            .authenticationManager(getAuthenticationManager(http))
            .sessionManagement(sess -> sess.sessionCreationPolicy(STATELESS))
            .addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
            
        return http.build();
    }

    // 2. THE "NUCLEAR" CORS BEAN
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        
        // ALLOW YOUR VERCEL URL HERE (No trailing slash!)
        configuration.setAllowedOrigins(Arrays.asList(
            "https://autoberlo.vercel.app", // REPLACE with your actual Vercel URL
            "http://localhost:5173"         // Keep localhost for testing
        ));
        
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"));
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "X-Requested-With"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
    
    // ... keep your getAuthenticationManager bean ...
}
}
