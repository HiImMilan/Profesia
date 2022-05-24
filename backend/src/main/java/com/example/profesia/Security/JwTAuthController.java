package com.example.profesia.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
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
import org.springframework.web.server.ResponseStatusException;

import net.bytebuddy.asm.Advice.Return;

@RestController
@RequestMapping("/api/v1/")
public class JwTAuthController {

    @Autowired
    private JwToken jwToken;

    @Autowired
    private JwTUserDetailsService jwTUserDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwTError jwTError;

    @PostMapping("/authenticate")
    public @ResponseBody ResponseEntity<?> createAuthToken(JwTRequest jwTRequest) {

        System.out.println(jwTRequest.toString());
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(jwTRequest.getUsername(), jwTRequest.getPassword()));
        } catch (DisabledException e) {
            System.out.println("USER DISABLED");
        } catch (BadCredentialsException e) {
            System.out.println(jwTRequest.toString());
            System.out.println("Bad Credentials");

            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthenticated");
        }

        UserDetails userDetails = jwTUserDetailsService.loadUserByUsername(jwTRequest.getUsername());
        String token = jwToken.createToken(userDetails.getUsername(), userDetails.getUsername());

        return ResponseEntity.ok(new JwtResponse(token));
    }

    @PostMapping("/validate")
    public @ResponseBody ResponseEntity<?> validateToken(String token) {

        if (jwToken.validateToken(token)) {
            return ResponseEntity.ok("true");
        } else {
            return ResponseEntity.ok("false");
        }
    }
}
