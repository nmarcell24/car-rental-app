package autoberlo.autoberlo.controller;

import autoberlo.autoberlo.auth.PermissionCollector;
import autoberlo.autoberlo.converter.UserConverter;
import autoberlo.autoberlo.dto.users.LoginRequest;
import autoberlo.autoberlo.dto.users.UserList;
import autoberlo.autoberlo.dto.users.UserRead;
import autoberlo.autoberlo.dto.users.UserSave;
import autoberlo.autoberlo.model.User;
import autoberlo.autoberlo.service.UserService;
import autoberlo.autoberlo.token.JWTTokenProvider;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@Tag(name="User manage", description = "CRUD operations, list users, and user login")
public class UserController {

    private AuthenticationManager authenticationManager;
    private JWTTokenProvider jwtTokenProvider;
    private UserService userService;

    @Autowired
    public UserController(AuthenticationManager authenticationManager, JWTTokenProvider jwtTokenProvider, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping("/login")
    @Operation(
            summary = "User login",
            description = "Authenticates the user and returns a JWT token for further requests."
    )
    public ResponseEntity<UserRead> login(@RequestBody LoginRequest loginRequest) {
        authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        User user = userService.findUserByUsername(loginRequest.getUsername());
        PermissionCollector collector = new PermissionCollector(user);
        HttpHeaders jwtHeader = getJWTHeader(collector);
        UserRead userRead = UserConverter.convertModelToRead(user);
        return new ResponseEntity<>(userRead, jwtHeader, HttpStatus.OK);
    }

    private HttpHeaders getJWTHeader(PermissionCollector collector) {
        HttpHeaders jwtHeader = new HttpHeaders();
        jwtHeader.add("JWT_Token", jwtTokenProvider.generateJwtToken(collector));
        return jwtHeader;
    }

    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }

    @GetMapping("/list")
    @Operation(
            summary = "List all users",
            description = "Returns a list of all users in the system. Requires appropriate permissions."
    )
    public List<UserList> listUser() {
        return userService.listUsers();
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    @Operation(
            summary = "Create a new user",
            description = "Creates a new user record in the system."
    )
    public UserRead createUser(@RequestBody @Valid UserSave userSave){
        return userService.createUser(userSave);
    }

    @PreAuthorize("hasAuthority('UPDATE_USER')")
    @PutMapping("/{id}")
    @Operation(
            summary = "Update user by ID",
            description = "Updates an existing user based on the provided ID and new data."
    )
    public UserRead updateUser(@Valid @PathVariable Integer id, UserSave userSave ) {
        return userService.updateUser(id, userSave);
    }

    @PreAuthorize("hasAuthority('READ_USER')")
    @GetMapping("/{id}")
    @Operation(
            summary = "Read user by ID",
            description = "Fetches user details by ID from the system."
    )
    public UserRead getUser(@Valid @PathVariable Integer id ) {
        return userService.getUser(id);
    }


}