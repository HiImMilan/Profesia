package com.example.profesia.Security;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.example.profesia.User.User;

import lombok.Data;

@Entity
@Table(name = "reset_code")
@Data
public class ResetCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String code;
    public Date expiryDate;

    @ManyToOne
    public User user;
}
