package autoberlo.autoberlo.converter;


import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.model.User;
import java.util.ArrayList;
import java.util.List;

public class UserConverter {

    public static UserRead convertModelToRead(User user) {
        UserRead userRead = new UserRead();
        userRead.setId(user.getId());
        userRead.setName(user.getName());
        userRead.setUsername(userRead.getUsername());
        userRead.setPhoneNumber(user.getPhoneNumber());
        userRead.setEmail(user.getEmail());
        userRead.setPassword(user.getPassword());
        userRead.setAddress(user.getAddress());
        userRead.setDayOfBirth(user.getDayOfBirth());
        userRead.setRole(user.getRole());

        return userRead;
}

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

    public static User convertSaveToModel(Integer id, UserSave userSave) {
        User user = new User();
        user.setId(id);
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

    public static List<UserList> convertModelsToList(List<User> users) {
        List<UserList> dtouser = new ArrayList<>();
        for (User user : users) {
            dtouser.add(convertModelToList(user));
        }
        return dtouser;
    }

    private static UserList convertModelToList(User user) {
        UserList userList = new UserList();
        userList.setId(user.getId());
        userList.setName(user.getName());
        userList.setUsername(user.getUsername());
        return userList;
    }


}
