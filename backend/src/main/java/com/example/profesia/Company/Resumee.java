package com.example.profesia.Company;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.example.profesia.User.User;

import lombok.Data;

@Entity
@Data
public class Resumee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private User user;
    private String filePath;
    private Date createdAt;

}
