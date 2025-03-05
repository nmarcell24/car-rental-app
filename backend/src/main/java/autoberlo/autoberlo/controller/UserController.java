package autoberlo.autoberlo.controller;

import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserLogin;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/user")
@Tag(name="User manage", description = "Crud + list + login")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/ist")
    @Operation(summary = "List name all of the user")
    public List<UserList> listUser() {
        return userService.listUsers();
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    @Operation(summary = "create new user")
    public UserRead createUser(@RequestBody @Valid UserSave userSave){
        return userService.createUser(userSave);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update user by id")
    public UserRead updateUser(@Valid @PathVariable Integer id, UserSave userSave ) {
        return userService.updateUser(id, userSave);
    }


    @GetMapping("/{id}")
    @Operation(summary = "Reads user by id")
    public UserRead getUser(@Valid @PathVariable Integer id ) {
        return userService.getUser(id);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserLogin userLogin) {
        boolean isAuthenticated = userService.login(userLogin.getEmail(), userLogin.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok(userLogin.getEmail());
        } else {
            return ResponseEntity.status(401).body("Hibás felhasználónév vagy jelszó");
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete user by id")
    @ResponseStatus(HttpStatus.NO_CONTENT) // 204 No Content, ha a törlés sikeres
    public void deleteUser (@PathVariable Integer id) {
        boolean isDeleted = userService.deleteUser (id);
        if (!isDeleted) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Felhasználó nem található.");
        }
    }
}