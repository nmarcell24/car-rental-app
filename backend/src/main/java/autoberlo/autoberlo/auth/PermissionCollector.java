package autoberlo.autoberlo.auth;

import autoberlo.autoberlo.model.User;
import autoberlo.autoberlo.service.SpringContext;
import autoberlo.autoberlo.service.UserService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


/**
 * A custom implementation of {@link UserDetails} that is used to collect and provide
 * user permissions for Spring Security authentication and authorization.
 * <p>
 * This class retrieves the user's permissions from the {@link UserService} and
 * provides them as a collection of {@link GrantedAuthority}. The user's username
 * and password are also provided for authentication purposes.
 * </p>
 *
 * Example:
 * <pre>
 * PermissionCollector permissionCollector = new PermissionCollector(user);
 * Collection&lt;GrantedAuthority&gt; authorities = permissionCollector.getAuthorities();
 * </pre>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public class PermissionCollector implements UserDetails {

    /**
     * The user whose permissions will be collected.
     */
    private User user;

    /**
     * The service used to retrieve the user's permissions.
     */

    private UserService userService = SpringContext.getBean(UserService.class);

    /**
     * Constructor for creating a {@link PermissionCollector} instance.
     *
     * @param user The user whose permissions are to be collected.
     */
    public PermissionCollector(User user) {
        this.user = user;
    }

    /**
     * Retrieves the authorities (permissions) granted to the user.
     *
     * <p>
     * This method uses the {@link UserService} to find the list of permissions associated
     * with the user and returns them as a collection of {@link SimpleGrantedAuthority}.
     * </p>
     *
     * @return A collection of {@link GrantedAuthority} representing the user's permissions.
     */

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<String> permissions = userService.findPermissionsByUser(this.user.getId());
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        permissions.forEach(permission -> authorities.add(new SimpleGrantedAuthority(permission)));
        return authorities;
    }

    /**
     * Retrieves the username of the user.
     *
     * @return The username of the user.
     */

    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    /**
     * Retrieves the password of the user.
     *
     * @return The password of the user.
     */

    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

}
