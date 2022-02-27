package com.example.service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.model.User;
import com.example.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String getUser() {
        return this.userRepository.findAll().toString();
    }

    public String addUser() {

        User user = new User("Test", "test@gmail.com", "password");
        this.userRepository.save(user);
        return "User added";
    }
}
