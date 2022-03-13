package com.example.profesia.Security;

import org.springframework.stereotype.Component;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Component
public class JwTUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) {
        // Toddo: get user from database
        User user = new User(username, "password", true, true, true, true, null);
        return user;
    }
}
