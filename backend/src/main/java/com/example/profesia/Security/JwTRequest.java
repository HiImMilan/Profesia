package com.example.profesia.Security;

import java.io.Serializable;

import lombok.Data;
@Data
public class JwTRequest implements Serializable {
    private String username;
    private String password;
}
