package autoberlo.autoberlo.dto.users;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class UserLogin {

    @NotBlank(message = "Az email cím nem lehet üres.")
    @Email(message = "Kérlek, adj meg egy érvényes email címet.")
    private String email;

    @NotBlank(message = "A jelszó nem lehet üres.")
    @Size(min = 4, message = "A jelszónak legalább 4 karakter hosszúnak kell lennie.")
    private String password;
}
