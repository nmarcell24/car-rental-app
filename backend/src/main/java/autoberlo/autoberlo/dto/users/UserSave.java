package autoberlo.autoberlo.dto.users;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * DTO class for saving user information.
 * <p>
 * This class is used to create a new user by capturing essential user details such as name, username,
 * phone number, email, address, birthdate, and role.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserSave {

    /**
     * The user's name. Cannot be blank.
     */
    @NotBlank(message = "A név nem lehet üres.")
    private String name;

    /**
     * The user's username. Cannot be blank.
     */

    @NotBlank(message = "A név nem lehet üres.")
    private String username;

    /**
     * The user's phone number. Cannot be blank, must match a valid phone number format.
     */

    @NotBlank(message = "A telefonszám nem lehet üres.")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,}$", message = "Kérlek, adj meg egy érvényes telefonszámot.")
    private String phoneNumber;


    /**
     * The user's email address. Cannot be blank, must match a valid email format.
     */

    @NotBlank(message = "Az email cím nem lehet üres.")
    @Email(message = "Kérlek, adj meg egy érvényes email címet.")
    private String email;

    /**
     * The user's password. Cannot be blank, must be at least 4 characters long.
     */

    @NotBlank(message = "A jelszó nem lehet üres.")
    @Size(min = 4, message = "A jelszónak legalább 4 karakter hosszúnak kell lennie.")
    private String password;

    /**
     * The user's address. Cannot be blank.
     */

    @NotBlank(message = "A cím nem lehet üres.")
    private String address;

    /**
     * The user's birthdate. Must be a date in the past.
     */

    @Past(message = "A születési dátumnak a múltban kell lennie.")
    private LocalDate dayOfBirth;

    /**
     * The user's role (e.g., "Admin", "User"). This is optional.
     */

    private String role;
}
