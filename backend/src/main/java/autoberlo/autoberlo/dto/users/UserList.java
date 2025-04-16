package autoberlo.autoberlo.dto.users;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 * DTO class for listing users.
 * <p>
 * This class contains the essential information about a user that is needed to list users,
 * such as the user's ID, name, and username.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserList {

    /**
     * The user's unique ID. Cannot be null.
     */
    @NotNull(message = "Az azonosító nem lehet null.")
    private Integer id;

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

}
