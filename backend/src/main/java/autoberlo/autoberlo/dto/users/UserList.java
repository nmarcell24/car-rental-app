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

    @NotBlank(message = "A név nem lehet üres.")
    private String username;

}
