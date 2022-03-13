package com.example.profesia.Security;

import io.jsonwebtoken.*;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class JwToken {

    private final String SECRET = "wk69BAz&{UlIJCL+I'4t!^C*J44kf";
    private final long EXPIRATION_TIME = 86400;

    public String createToken(String id, String username) {
        return Jwts.builder()
                .setSubject(username).setId(id)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }

    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getSubject();
    }

    public String getId(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getId();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public Date getExpirationDateFromToken(String token) {
        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getExpiration();
    }

    public boolean isExpired(String token) {
        return getExpirationDateFromToken(token).before(new Date());
    }
}