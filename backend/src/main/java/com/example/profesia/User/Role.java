package com.example.profesia.User;

import java.util.Collection;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user_role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;

    @ManyToMany
    @JoinTable(joinColumns = @JoinColumn(name = "role_id"), inverseJoinColumns = @JoinColumn(name = "permission_id"))
    private Collection<Permission> permissions;
}
