package autoberlo.autoberlo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Configuration class for setting up a password encoder in the Spring Security context.
 * <p>
 * This class provides a {@link PasswordEncoder} bean using the BCrypt hashing algorithm.
 * BCrypt is a strong hashing algorithm suitable for securely storing passwords.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Configuration
public class PasswordEncoderConfig {

    /**
     * Creates and returns a {@link PasswordEncoder} bean configured to use BCrypt.
     *
     * @return a {@link PasswordEncoder} instance that uses BCrypt
     */

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
