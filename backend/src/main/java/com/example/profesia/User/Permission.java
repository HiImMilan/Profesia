package com.example.profesia.User;
import javax.persistence.*;

import lombok.Data;

@Entity
@Data
@Table(name = "role_permissions")
public class Permission {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String permission;
    
}
