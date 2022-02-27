package com.example.profesia.Company;
import javax.persistence.*;

@Entity
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long Id;
    private String name;
    private String location;
    private String email;
    private String password;
}
