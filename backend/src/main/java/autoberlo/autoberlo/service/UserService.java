package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.UserConverter;
import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.exception.UserNotFoundException;
import autoberlo.autoberlo.model.User;
import autoberlo.autoberlo.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    public List<UserList> listUsers() {
        List<User> users = userRepository.findAll();
        return UserConverter.convertModelsToList(users);
    }

    public UserRead createUser(@Valid UserSave userSave) {
        User user = userRepository.save(UserConverter.convertSaveToModel(userSave));
        return UserConverter.convertModelToRead(user);
    }

    public UserRead updateUser(@Valid Integer id, UserSave userSave) {
        if(!userRepository.existsById(id))
            throw new UserNotFoundException();
        User user = userRepository.save(UserConverter.convertSaveToModel(id, userSave));
        return UserConverter.convertModelToRead(user);
    }

    public UserRead getUser(@Valid Integer id) {
        if(!userRepository.existsById(id))
            throw new UserNotFoundException();
        User user = userRepository.getReferenceById(id);
        return UserConverter.convertModelToRead(user);
    }
}