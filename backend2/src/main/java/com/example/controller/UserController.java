package com.example.controller;

import com.example.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String getUser() {
        return this.userService.getUser();
    }

    @GetMapping("/addUser")
    public String addUser() {

        this.userService.addUser();
        return "User added";
    }

}
