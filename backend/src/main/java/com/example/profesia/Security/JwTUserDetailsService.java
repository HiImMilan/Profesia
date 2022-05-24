package com.example.profesia.Security;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.example.profesia.User.Role;
import com.example.profesia.User.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.userdetails.User.UserBuilder;

@Service
public class JwTUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        System.out.println("username: " + username);
        com.example.profesia.User.User userData = userRepository.findByEmail(username);

        if (userData == null) {
            return null;
        }
        UserBuilder userBuilder = User.builder().username(userData.getEmail()).password(userData.getPassword())
                .authorities(getAuthorities());
        return userBuilder.build();
    }

    private SimpleGrantedAuthority getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();

        return new SimpleGrantedAuthority("ROLE_ADMIN");
    }

}
