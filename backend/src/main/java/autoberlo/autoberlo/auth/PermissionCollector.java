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

public class PermissionCollector implements UserDetails {

    private User user;

    private UserService userService = SpringContext.getBean(UserService.class);


    public PermissionCollector(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<String> permissions = userService.findPermissionsByUser(this.user.getUsername());
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        permissions.forEach(permission -> authorities.add(new SimpleGrantedAuthority(permission)));
        return authorities;
    }

    @Override
    public String getUsername() {
        return this.user.getUsername();
    }

    @Override
    public String getPassword() {
        return this.user.getPassword();
    }

}
