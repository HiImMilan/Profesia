package com.example.profesia.Jobs;

import javax.persistence.*;

@Entity
@Table(name = "jobs")
public class Job {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long Id;
    private String title;
    private String description;
    private Long companyId;
    private Long authorId;

    @Override
    public String toString(){
        return "Job{" +
                "Id=" + Id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", companyId=" + companyId +
                ", authorId=" + authorId +
                '}';
    }
}
