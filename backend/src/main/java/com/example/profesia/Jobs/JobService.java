package com.example.profesia.Jobs;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Iterable<Job> getJobs() {
        return this.jobRepository.findAll();
    }

    public Job getJob(Long id) {
        return this.jobRepository.findById(id).get();
    }

    public void addJob(Job job) {
        this.jobRepository.save(job);
    }

    public void updateJob(Job job) {
        this.jobRepository.save(job);
    }

    public void deleteJob(Long id) {
        this.jobRepository.deleteById(id);
    }

    public JobResponse getRecentJobs(int page) {
        Pageable sortedByDate = PageRequest.of(page, 10, Sort.by("createdAt"));

        Page<Job> sortedProducts = (Page<Job>) jobRepository.findAll(sortedByDate);
        return new JobResponse(sortedProducts.getContent(), page, sortedProducts.getTotalPages());
    }

}
