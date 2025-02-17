package autoberlo.autoberlo.dto.users;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserList {
    @NotNull(message = "Az azonosító nem lehet null.")
    private Integer id;

    @NotBlank(message = "A név nem lehet üres.")
    private String name;

    @NotBlank(message = "Az email cím nem lehet üres.")
    @Email(message = "Kérlek, adj meg egy érvényes email címet.")
    private String email;

    @NotBlank(message = "A jelszó nem lehet üres.")
    @Size(min = 4, message = "A jelszónak legalább 4 karakter hosszúnak kell lennie.")
    private String password;
}
