package com.example.profesia.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JwTAuthController {

    @Autowired
    private JwToken jwToken;

    @Autowired
    private JwTUserDetailsService jwTUserDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/authenticate")
    public @ResponseBody ResponseEntity<?> createAuthToken(JwTRequest jwTRequest) {

        try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(jwTRequest.getUsername(), jwTRequest.getPassword()));
		} catch (DisabledException e) {
			System.out.println("USER DISABLED");
		} catch (BadCredentialsException e) {
            System.out.println(jwTRequest.toString());
			System.out.println("Bad Credentials");
		}

        UserDetails userDetails = jwTUserDetailsService.loadUserByUsername(jwTRequest.getUsername());
        String token = jwToken.createToken(userDetails.getUsername(), userDetails.getPassword());

        return ResponseEntity.ok(new JwtResponse(token));
    }
}