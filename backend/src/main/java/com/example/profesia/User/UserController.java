package com.example.profesia.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/hello")
    public @ResponseBody String getUsers() {
        return "Hello World";
    }

    @GetMapping("/allusers")
    public Long getAllUsers() {
        // return first user
        return userRepository.count();
    }
}
