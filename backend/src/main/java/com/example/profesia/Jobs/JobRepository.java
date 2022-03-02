package com.example.profesia.Jobs;

import com.example.profesia.User.User;

import org.springframework.data.repository.CrudRepository;

public interface JobRepository extends CrudRepository<Job, Long> {
    // User findAuthorByJob(Job job);
}
