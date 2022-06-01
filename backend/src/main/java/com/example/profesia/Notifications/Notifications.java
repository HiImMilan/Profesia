package com.example.profesia.Notifications;

import com.example.profesia.User.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "notifications")
public class Notifications {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    private User receiver;
    private String message;


}
