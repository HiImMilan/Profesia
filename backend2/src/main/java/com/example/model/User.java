package com.example.model;

import javax.persistence.GeneratedValue;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    private String name;
    private String email;
    private String password;

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public User() {

    }

    // generate getters and setters

    public Long getId() {
        return id;
    }
    public Long setId(Long id) {
        return this.id = id;
    }
    public String getName() {
        return name;
    }
    public String setName(String name) {
        return this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public String setEmail(String email) {
        return this.email = email;
    }

    public String getPassword(){
        return this.password;
    }

    public String setPassword(String password){
        return this.password = password;
    }

}