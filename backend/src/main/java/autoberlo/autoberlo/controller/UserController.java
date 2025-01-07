package autoberlo.autoberlo.controller;

import autoberlo.autoberlo.dto.autok.AutoList;
import autoberlo.autoberlo.dto.autok.AutoRead;
import autoberlo.autoberlo.dto.autok.AutoSave;
import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.service.AutoService;
import autoberlo.autoberlo.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    /*

    @Autowired
    private UserService userService;

    @GetMapping("/userlist")
    @Operation(summary = "List name all of the user")
    public List<UserList> listUser() {
        return userService.listUsers();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/usercreate")
    @Operation(summary = "create new user")
    public UserRead createUser(@RequestBody @Valid UserSave userSave){
        return userService.createUser(userSave);
    }

    @PutMapping("/user/{id}")
    @Operation(summary = "Update user by id")
    public UserRead updateUser(@Valid @PathVariable Integer id, UserSave userSave ) {
        return userService.updateUser(id, userSave);
    }


    @GetMapping("/user/{id}")
    @Operation(summary = "Read user by id")
    public UserRead getUser(@Valid @PathVariable Integer id ) {
        return userService.getUser(id);
    }*/
}