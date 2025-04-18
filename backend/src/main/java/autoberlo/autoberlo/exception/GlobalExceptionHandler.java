package autoberlo.autoberlo.exception;

import autoberlo.autoberlo.exception.LoanAlreadyExcistsException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(LoanAlreadyExcistsException.class)
    public ResponseEntity<Map<String, String>> handleLoanAlreadyExists(LoanAlreadyExcistsException ex) {
        Map<String, String> response = new HashMap<>();
        response.put("error", "Loan Conflict");
        response.put("message", ex.getMessage());
        return new ResponseEntity<>(response, HttpStatus.CONFLICT); // 409 Conflict
    }

}
