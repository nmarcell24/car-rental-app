package autoberlo.autoberlo.converter;


import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.model.User;
import java.util.ArrayList;
import java.util.List;

/**
 * Converter class for transforming User entities to DTOs and vice versa.
 * <p>
 * Provides methods for converting:
 * <ul>
 *     <li>User entity to UserRead DTO</li>
 *     <li>UserSave DTO to User entity</li>
 *     <li>List of User entities to list of UserList DTOs</li>
 * </ul>
 *
 * Authors: Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public class UserConverter {

    /**
     * Converts a User entity to a UserRead DTO containing full user details.
     *
     * @param user the User model to convert
     * @return UserRead DTO
     */

    public static UserRead convertModelToRead(User user) {
        UserRead userRead = new UserRead();
        userRead.setId(user.getId());
        userRead.setName(user.getName());
        userRead.setUsername(user.getUsername());
        userRead.setPhoneNumber(user.getPhoneNumber());
        userRead.setEmail(user.getEmail());
        userRead.setPassword(user.getPassword());
        userRead.setAddress(user.getAddress());
        userRead.setDayOfBirth(user.getDayOfBirth());
        userRead.setRole(user.getRole());

        return userRead;
    }


    /**
     * Converts a UserSave DTO to a new User entity (without ID).
     *
     * @param userSave the DTO containing user registration details
     * @return a User entity ready for persistence
     */

    public static User convertSaveToModel(UserSave userSave) {
        User user = new User();
        user.setName(userSave.getName());
        user.setUsername(userSave.getUsername());
        user.setPhoneNumber(userSave.getPhoneNumber());
        user.setEmail(userSave.getEmail());
        user.setPassword(userSave.getPassword());
        user.setAddress(userSave.getAddress());
        user.setDayOfBirth(userSave.getDayOfBirth());
        user.setRole(userSave.getRole());
        return user;
    }


    /**
     * Converts a UserSave DTO to a User entity with a specified ID (used in update operations).
     *
     * @param id       the ID of the user being updated
     * @param userSave the DTO with updated user data
     * @return the User entity containing updated data
     */

    public static User convertSaveToModel(Integer id, UserSave userSave) {
        User user = new User();
        user.setId(id);
        user.setName(userSave.getName());
        user.setUsername(userSave.getUsername());
        if(userSave.getPassword() != "") {
            user.setPassword(userSave.getPassword());
        }
        user.setPhoneNumber(userSave.getPhoneNumber());
        user.setEmail(userSave.getEmail());
        user.setPassword(userSave.getPassword());
        user.setAddress(userSave.getAddress());
        user.setDayOfBirth(userSave.getDayOfBirth());
        user.setRole(userSave.getRole());
        return user;
    }

    /**
     * Converts a list of User entities to a list of simplified UserList DTOs.
     *
     * @param users list of User entities
     * @return list of UserList DTOs
     */

    public static List<UserList> convertModelsToList(List<User> users) {
        List<UserList> dtouser = new ArrayList<>();
        for (User user : users) {
            dtouser.add(convertModelToList(user));
        }
        return dtouser;
    }

    /**
     * Converts a single User entity to a UserList DTO (summary data).
     *
     * @param user the User model to convert
     * @return UserList DTO
     */

    private static UserList convertModelToList(User user) {
        UserList userList = new UserList();
        userList.setId(user.getId());
        userList.setName(user.getName());
        userList.setUsername(user.getUsername());
        return userList;
    }


}
