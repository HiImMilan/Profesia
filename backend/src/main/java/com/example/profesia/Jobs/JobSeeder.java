package com.example.profesia.Jobs;

import com.example.profesia.Utils.ISeedable;
import com.github.javafaker.Faker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class JobSeeder extends ISeedable {

    @Autowired
    private JobRepository repository;

    public JobSeeder() {
        this.setNumberOfEntities(100);
    }

    public ISeedable Seed() {
        Faker faker = new Faker();
        var jobFaker = new com.github.javafaker.Job(faker);

        for (int i = 0; i < this.getNumberOfEntities(); i++) {
            Job job = new Job();
            job.setTitle(jobFaker.title());
            job.setDescription(faker.lorem().paragraph());
            job.setCategory(jobFaker.position());
            job.setCreatedAt(new Date(System.currentTimeMillis()));
            job.setUpdatedAt(new Date(System.currentTimeMillis()));
            job.setEndDate(new Date(System.currentTimeMillis()));

            repository.save(job);
        }
        return this;
    }
}
