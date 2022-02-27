package com.example.profesia.User;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;
    private String name;
    private String email;
    private String password;
}
