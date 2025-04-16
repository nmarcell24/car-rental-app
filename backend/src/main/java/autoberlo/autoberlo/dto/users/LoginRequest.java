package autoberlo.autoberlo.dto.users;

import lombok.Data;


/**
 * DTO class for login request.
 * <p>
 * This class represents the data required for a user login, including the username and password.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Data
public class LoginRequest {

    /**
     * The username of the user trying to log in.
     */
    private String username;


    /**
     * The password of the user trying to log in.
     */
    private String password;

    /**
     * Gets the username.
     * @return the username of the user.
     */

    public String getUsername() {
        return username;
    }


    /**
     * Sets the username.
     * @param username the username to set.
     */
    public void setUsername(String username) {
        this.username = username;
    }


    /**
     * Gets the password.
     * @return the password of the user.
     */
    public String getPassword() {
        return password;
    }


    /**
     * Sets the password.
     * @param password the password to set.
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
