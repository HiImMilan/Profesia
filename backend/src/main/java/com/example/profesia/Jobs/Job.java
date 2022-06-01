package com.example.profesia.Jobs;

import java.util.*;
import javax.persistence.*;
import com.example.profesia.Company.Company;
import com.example.profesia.Jobs.Categories.Chips;

import lombok.Data;

@Entity
@Data
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Job(String title, String description, String coverImage, Company company, String advertiserName, String profilePicture, String category, List<Chips> chips, Date createdAt, Date updatedAt, Date endDate) {
        this.title = title;
        this.description = description;
        this.coverImage = coverImage;
        this.company = company;
        this.advertiserName = advertiserName;
        this.profilePicture = profilePicture;
        this.category = category;
        this.chips = chips;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.endDate = endDate;
    }

    public Job() {
    }

    private String title;
    @Column(name = "description", length = 65535, columnDefinition = "TEXT")
    private String description;
    private String coverImage;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "company_id")
    private Company company;
    private String advertiserName;
    private String profilePicture;
    private String category;

    @ManyToMany
    public List<Chips> chips;
    private Date createdAt;
    private Date updatedAt;
    private Date endDate;
}
