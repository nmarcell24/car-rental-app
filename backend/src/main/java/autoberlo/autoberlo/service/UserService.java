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

/**
 * Service class for managing User-related operations, including user creation,
 * retrieval, update, permission fetching, and authentication integration.
 *
 * Implements {@link UserDetailsService} to provide Spring Security integration.
 *
 * This service handles password encryption, data conversion between DTO and entity,
 * and basic user-related CRUD operations.
 *
 * Authors: Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Service
@Transactional
@Qualifier("userDetailsService")
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * Retrieves all users from the database and converts them to {@link UserList} DTOs.
     *
     * @return List of users in DTO format.
     */

    public List<UserList> listUsers() {
        List<User> users = userRepository.findAll();
        return UserConverter.convertModelsToList(users);
    }

    /**
     * Creates a new user with encrypted password.
     *
     * @param userSave The DTO containing user data.
     * @return The created user as a {@link UserRead} DTO.
     */

    public UserRead createUser (@Valid UserSave userSave) {
        User user = UserConverter.convertSaveToModel(userSave);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user = userRepository.save(user);
        return UserConverter.convertModelToRead(user);
    }


    /**
     * Updates an existing user's data.
     *
     * Fields are updated only if the provided values are not null or empty.
     *
     * @param id The ID of the user to update.
     * @param userSave The DTO containing updated values.
     * @return The updated user as a {@link UserRead} DTO.
     * @throws RuntimeException if the user does not exist.
     */

    public UserRead updateUser(Integer id, UserSave userSave) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(NO_USER_FOUND_BY_USERNAME);
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

    /**
     * Retrieves a user by ID.
     *
     * @param id The user's ID.
     * @return The user as a {@link UserRead} DTO.
     * @throws UserNotFoundException if the user does not exist.
     */


    public UserRead getUser (@Valid Integer id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(NO_USER_FOUND_BY_USERNAME);
        }
        User user = userRepository.getReferenceById(id);
        return UserConverter.convertModelToRead(user);
    }

    public static final String NO_USER_FOUND_BY_USERNAME = "No user found by username: ";

    /**
     * Retrieves the list of permission names associated with a specific user.
     *
     * @param userId The user's ID.
     * @return List of permission names.
     */

    public List<String> findPermissionsByUser(Integer userId) {
        return userRepository.findPermissionsByUser(userId);
    }

    /**
     * Retrieves a user entity by username.
     *
     * @param username The username to search for.
     * @return The {@link User} entity.
     */

    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }


    /**
     * Loads user details for Spring Security authentication.
     *
     * @param username The username to load.
     * @return The authenticated user as {@link UserDetails}.
     * @throws UsernameNotFoundException if the user is not found.
     */

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