package autoberlo.autoberlo.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration class for setting up Swagger documentation for the API.
 * <p>
 * This class configures the OpenAPI (Swagger) documentation with security information,
 * such as JWT authentication using a bearer token. It also provides basic metadata
 * like the title and description of the API.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Configuration
public class SwaggerConfiguration {

    /**
     * Creates the security scheme for JWT bearer authentication.
     *
     * @return a SecurityScheme object for bearer authentication using JWT
     */
    private SecurityScheme createAPIKeyScheme() {
        return new SecurityScheme().type(SecurityScheme.Type.HTTP)
                .bearerFormat("JWT")
                .scheme("bearer");
    }

    /**
     * Configures the OpenAPI documentation for the application.
     * This includes security configuration (JWT bearer authentication)
     * and basic API metadata (title and description).
     *
     * @return an OpenAPI object that configures the Swagger documentation
     */
    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI().addSecurityItem(new SecurityRequirement().
                        addList("Bearer Authentication"))
                .components(new Components().addSecuritySchemes
                        ("Bearer Authentication", createAPIKeyScheme()))
                .info(new Info().title("... API")
                        .description("Webservice for ...")
                );
    }
}