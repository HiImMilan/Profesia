package com.example.profesia.User;

import com.example.profesia.Utils.ISeedable;
import com.github.javafaker.Faker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserSeeder extends ISeedable {

    @Autowired
    private UserRepository repository;

    @Override
    public ISeedable Seed() {
        User user = new User();
        user.setName("John Doe");
        user.setEmail("recruter@gmail.com");
        user.setPassword("123456789");
        repository.save(user);
        return this;
    }
}
