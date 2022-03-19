package com.example.profesia.Jobs;

import java.util.*;
import javax.persistence.*;
import com.example.profesia.Company.Company;
import lombok.Data;

@Entity
@Data
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(name = "description", length = 65535, columnDefinition = "TEXT")
    private String description;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "company_id")
    private Company company;
    private String category;
    private Date createdAt;
    private Date updatedAt;
    private Date endDate;
}
