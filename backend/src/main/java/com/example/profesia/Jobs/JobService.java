package com.example.profesia.Jobs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Iterable<Job> getJobs() {
        return this.jobRepository.findAll();
    }
}
