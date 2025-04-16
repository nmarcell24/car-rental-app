
package autoberlo.autoberlo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * Represents a user in the system.
 * <p>
 * This entity stores personal information of the user, including their name, username, phone number,
 * email, password, address, birthdate, and role. It also enforces basic validation rules for fields such as
 * phone number format, email format, password length, and birthdate.
 * </p>
 * <p>
 * The {@link User} entity is mapped to the {@code user} table in the database.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    /**
     * The unique identifier of the user.
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * The user's full name.
     * This field cannot be blank.
     */

    @NotBlank(message = "A név nem lehet üres.")
    private String name;

    /**
     * The user's username.
     * This field cannot be blank.
     */

    @NotBlank(message = "A név nem lehet üres.")
    private String username;


    /**
     * The user's phone number.
     * The phone number must be a valid format.
     */


    @NotBlank(message = "A telefonszám nem lehet üres.")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,}$", message = "Kérlek, adj meg egy érvényes telefonszámot.")
    private String phoneNumber;


    /**
     * The user's email address.
     * The email must be a valid format.
     */

    @NotBlank(message = "Az email cím nem lehet üres.")
    @Email(message = "Kérlek, adj meg egy érvényes email címet.")
    private String email;

    /**
     * The user's password.
     * The password must be at least 4 characters long.
     */

    @NotBlank(message = "A jelszó nem lehet üres.")
    @Size(min = 4, message = "A jelszónak legalább 4 karakter hosszúnak kell lennie.")
    private String password;

    /**
     * The user's address.
     * This field cannot be blank.
     */

    @NotBlank(message = "A cím nem lehet üres.")
    private String address;

    /**
     * The user's date of birth.
     * The birthdate must be a date in the past.
     */

    @Past(message = "A születési dátumnak a múltban kell lennie.")
    private LocalDate dayOfBirth;

    /**
     * The user's role in the system.
     * This could be an administrator, user, etc.
     */

    private String role;


}


