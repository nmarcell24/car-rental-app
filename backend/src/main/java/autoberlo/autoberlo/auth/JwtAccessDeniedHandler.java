package autoberlo.autoberlo.auth;


import com.fasterxml.jackson.databind.ObjectMapper;
import  autoberlo.autoberlo.dto.ExceptionResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.OutputStream;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * Custom implementation of {@link AccessDeniedHandler} that is triggered
 * when a user tries to access a resource without the required permissions.
 * <p>
 * This handler returns a structured JSON error object including the HTTP status code,
 * status type, and a human-readable error message.
 * </p>
 *
 * Example of the returned JSON:
 * <pre>
 * {
 *   "statusCode": 401,
 *   "httpStatus": "UNAUTHORIZED",
 *   "reason": "UNAUTHORIZED",
 *   "message": "You do not have permission to access this page"
 * }
 * </pre>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {

    /**
     * Default error message that is returned when the user does not have access
     * to a given resource.
     */
    public static final String ACCESS_DENIED_MESSAGE = "You do not have permission to access this page";

    /**
     * Handles access denied exceptions by writing a JSON response containing
     * details of the authorization failure.
     *
     * @param request   The current HTTP request
     * @param response  The response to write to
     * @param exception The thrown {@link AccessDeniedException}
     * @throws IOException if an error occurs while writing the response
     */

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException exception) throws IOException {
        ExceptionResponse exceptionResponse = new ExceptionResponse(UNAUTHORIZED.value(), UNAUTHORIZED, UNAUTHORIZED.getReasonPhrase().toUpperCase(), ACCESS_DENIED_MESSAGE);
        response.setContentType(APPLICATION_JSON_VALUE);
        response.setStatus(UNAUTHORIZED.value());
        OutputStream outputStream = response.getOutputStream();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(outputStream, exceptionResponse);
        outputStream.flush();
    }
}
