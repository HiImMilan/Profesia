package com.example.profesia.Security;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.context.annotation.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

@Service
public class JwTUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = new User("test", "$2a$12$XAXFHuq5JAdCoRakGr34hOIvQZcZ5XxBu7CsVxf/40w5HmyTwXK.S", true, true, true,
                true, new ArrayList<>());
        return user;
    }
}
