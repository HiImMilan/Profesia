package com.example.profesia.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/allusers")
    public Long getAllUsers() {
        // return first user
        return userRepository.count();
    }

    @GetMapping("/info")
    public UserInfo getUserInfo() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userRepository.findByEmail(auth.getName());
        if (user == null) {
            return null;
        }
        UserInfo userInfo = new UserInfo(user.getName(), user.getEmail(), user.getAvatar());
        return userInfo;
    }
}
