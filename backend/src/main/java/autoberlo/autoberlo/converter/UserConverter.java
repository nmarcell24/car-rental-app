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
        userRead.setPhoneNumber(user.getPhoneNumber());
        userRead.setEmail(user.getEmail());
        userRead.setAddress(user.getAddress());
        userRead.setAge(user.getAge());
        userRead.setDayOfBirth(user.getDayOfBirth());
        userRead.setMothersName(user.getMothersName());

        return userRead;
}

    public static User convertSaveToModel(UserSave userSave) {
        User user = new User();
        user.setName(user.getName());
        user.setPhoneNumber(user.getPhoneNumber());
        user.setEmail(user.getEmail());
        user.setAddress(user.getAddress());
        user.setAge(user.getAge());
        user.setDayOfBirth(user.getDayOfBirth());
        user.setMothersName(user.getMothersName());
        return user;
    }

    public static User convertSaveToModel(Integer id, UserSave userSave) {
        User user = new User();
        user.setId(id);
        user.setName(userSave.getName());
        user.setPhoneNumber(userSave.getPhoneNumber());
        user.setEmail(userSave.getEmail());
        user.setAddress(userSave.getAddress());
        user.setAge(userSave.getAge());
        user.setDayOfBirth(userSave.getDayOfBirth());
        user.setMothersName(userSave.getMothersName());
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
        return userList;
    }


}
