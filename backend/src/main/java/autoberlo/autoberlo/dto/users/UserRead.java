package autoberlo.autoberlo.dto.users;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserRead {
    private Integer id;
    private String name;
    private String phoneNumber;
    private String email;
    private String password;
    private String address;
    private LocalDate dayOfBirth;
}
