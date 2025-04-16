package autoberlo.autoberlo.dto;

import org.springframework.http.HttpStatus;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * DTO class for exception response.
 * <p>
 * This class represents the details of an exception response, including timestamp, HTTP status code,
 * status, reason, and message, which can be returned to the client when an error occurs.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public class ExceptionResponse {

    /**
     * Timestamp when the exception occurred, in the format "yyyy-MM-dd HH:mm:ss".
     */

    private String timestamp;

    /**
     * The HTTP status code associated with the exception (e.g., 404, 500).
     */
    private int httpStatusCode;


    /**
     * The HTTP status (e.g., HttpStatus.NOT_FOUND, HttpStatus.INTERNAL_SERVER_ERROR).
     */
    private HttpStatus httpStatus;

    /**
     * The reason for the exception (usually a short phrase).
     */
    private String reason;

    /**
     * The message associated with the exception, providing more detail.
     */
    private String message;

    /**
     * Constructor to initialize the exception response.
     *
     * @param httpStatusCode the HTTP status code (e.g., 404)
     * @param httpStatus the HTTP status (e.g., HttpStatus.NOT_FOUND)
     * @param reason the reason for the exception (short description)
     * @param message the message with more details about the exception
     */

    public ExceptionResponse(int httpStatusCode, HttpStatus httpStatus, String reason, String message) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        this.timestamp = format.format( new Date() );
        this.httpStatusCode = httpStatusCode;
        this.httpStatus = httpStatus;
        this.reason = reason;
        this.message = message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public int getHttpStatusCode() {
        return httpStatusCode;
    }

    public void setHttpStatusCode(int httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
