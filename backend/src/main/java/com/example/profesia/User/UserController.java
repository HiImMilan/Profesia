package com.example.profesia.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    @GetMapping("/")
    public @ResponseBody String getUsers() {
        return "Hello World";
    }
}
