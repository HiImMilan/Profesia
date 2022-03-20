package com.example.profesia.Security;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
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

        try {
            com.example.profesia.User.User userData = userRepository.findAll().iterator().next();
            UserBuilder userBuilder = User.builder().username(userData.getName()).password(userData.getPassword())
                    .authorities(getAuthorities(userData));
            return userBuilder.build();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;

    }

    private List<GrantedAuthority> getAuthorities(com.example.profesia.User.User userData) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for (Role role : userData.getRoles()) {
            authorities.add(new SimpleGrantedAuthority(role.getName()));
        }
        return authorities;
    }

}
