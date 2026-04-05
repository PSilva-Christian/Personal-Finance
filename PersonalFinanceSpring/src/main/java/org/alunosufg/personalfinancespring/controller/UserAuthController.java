package org.alunosufg.personalfinancespring.controller;

import jakarta.validation.Valid;
import org.alunosufg.personalfinancespring.dto.LoginAuthDTO;
import org.alunosufg.personalfinancespring.dto.RegisterRequestDTO;
import org.alunosufg.personalfinancespring.dto.ResponseDTO;
import org.alunosufg.personalfinancespring.entities.UserEntity;
import org.alunosufg.personalfinancespring.services.UserAuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@RequestMapping("/auth")
@CrossOrigin(origins = "${angular.frontend.url}")
public class UserAuthController {
    private final UserAuthService userAuthService;

    public UserAuthController(UserAuthService userAuthService ){
        this.userAuthService = userAuthService;
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@Valid @RequestBody RegisterRequestDTO body)  {

        if ( body != null) {
            if (!userAuthService.existingUserInDatabase(body)) {
                UserEntity newUser = userAuthService.registerUser(body);
                return userAuthService.authUserResponse(newUser);
            }

            return userAuthService.credentialsAlreadyUsed(body);

        }

        return userAuthService.wrongAuthCredentials("null");

    }

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@Valid @RequestBody LoginAuthDTO body) {

        UserEntity userLog = userAuthService.loginUser(body);
        if (userLog != null) {
            return userAuthService.authUserResponse(userLog);
        }

        return userAuthService.wrongAuthCredentials("Not found");
    }

}
