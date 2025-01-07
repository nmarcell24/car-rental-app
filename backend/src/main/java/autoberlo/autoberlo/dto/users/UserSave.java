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

public class UserSave {
    private String name;
    private String phoneNumber;
    private String email;
    private String address;
    private int age;
    private LocalDate dayOfBirth;
    private String mothersName;

}
