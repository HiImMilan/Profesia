package com.example.profesia.Company;

import java.util.List;

import javax.persistence.*;

import com.example.profesia.User.User;

import lombok.Data;

@Entity
@Table(name = "company")
@Data
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String location;
    private String email;
    private String avatar;
    private String password;
    @OneToMany
    private List<User> recrutors;
}
