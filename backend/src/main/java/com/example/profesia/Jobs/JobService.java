package com.example.profesia.Jobs;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public String getRecentJobs(int page) {
        List<Job> recentJobs = null;
        List<Job> jobs = null;

        // get 12 jobs
        jobs = (List<Job>) jobRepository.findAll(); // cast = rakovina
        int start = (page) * 12;
        int end = start + 12;

        recentJobs = jobs.subList(start, end);

        Gson gson = new Gson();
        // jeble riešenie ale na teraz musí postačiť
        return gson.toJson(recentJobs)
                .replace("[", "{\"data\":[")
                .replace("]", "],\"cursor\":" + page + ",\"totalPages\":" + jobs.size() / 12 + "}");
    }

}
