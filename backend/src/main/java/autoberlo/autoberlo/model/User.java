
package autoberlo.autoberlo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "A név nem lehet üres.")
    private String name;

    @NotBlank(message = "A név nem lehet üres.")
    private String username;


    @NotBlank(message = "A telefonszám nem lehet üres.")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,}$", message = "Kérlek, adj meg egy érvényes telefonszámot.")
    private String phoneNumber;

    @NotBlank(message = "Az email cím nem lehet üres.")
    @Email(message = "Kérlek, adj meg egy érvényes email címet.")
    private String email;

    @NotBlank(message = "A jelszó nem lehet üres.")
    @Size(min = 4, message = "A jelszónak legalább 4 karakter hosszúnak kell lennie.")
    private String password;

    @NotBlank(message = "A cím nem lehet üres.")
    private String address;

    @Past(message = "A születési dátumnak a múltban kell lennie.")
    private LocalDate dayOfBirth;

    private String role;


}


