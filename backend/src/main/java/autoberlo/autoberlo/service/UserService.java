package autoberlo.autoberlo.service;

import autoberlo.autoberlo.auth.PermissionCollector;
import autoberlo.autoberlo.converter.UserConverter;
import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.exception.UserNotFoundException;
import autoberlo.autoberlo.model.User;
import autoberlo.autoberlo.repository.UserRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@Transactional
@Qualifier("userDetailsService")
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserList> listUsers() {
        List<User> users = userRepository.findAll();
        return UserConverter.convertModelsToList(users);
    }

    public UserRead createUser (@Valid UserSave userSave) {
        User user = UserConverter.convertSaveToModel(userSave);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = userRepository.save(user);
        return UserConverter.convertModelToRead(user);
    }

    public UserRead updateUser(Integer id, UserSave userSave) {
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found");
        }

        User user = userRepository.getReferenceById(id);

        if (userSave.getName() != null) {
            user.setName(userSave.getName());
        }
        if (userSave.getUsername() != null) {
            user.setUsername(userSave.getUsername());
        }
        if (userSave.getPassword() != null && !userSave.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userSave.getPassword()));
        }
        if (userSave.getPhoneNumber() != null) {
            user.setPhoneNumber(userSave.getPhoneNumber());
        }
        if (userSave.getEmail() != null) {
            user.setEmail(userSave.getEmail());
        }
        if (userSave.getAddress() != null) {
            user.setAddress(userSave.getAddress());
        }
        if (userSave.getDayOfBirth() != null) {
            user.setDayOfBirth(userSave.getDayOfBirth());
        }

        User savedUser = userRepository.save(user);
        return UserConverter.convertModelToRead(savedUser);
    }


    public UserRead getUser (@Valid Integer id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(NO_USER_FOUND_BY_USERNAME);
        }
        User user = userRepository.getReferenceById(id);
        return UserConverter.convertModelToRead(user);
    }

    public static final String NO_USER_FOUND_BY_USERNAME = "No user found by username: ";

    public List<String> findPermissionsByUser(Integer userId) {
        return userRepository.findPermissionsByUser(userId);
    }

    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(NO_USER_FOUND_BY_USERNAME + username);
        } else {
            return new PermissionCollector(user);
        }
    }
}