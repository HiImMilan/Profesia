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
        // get 12 jobs
        List<Job> jobs = (List<Job>) jobRepository.findAll(); // cast = rakovina
        int start = (page) * 12;
        int end = start + 12;

        List<Job> recentJobs = jobs.subList(start, end);

        Gson gson = new Gson();
        String json = gson.toJson(recentJobs)
                .replace("[", "{\"data\":[")
                .replace("]", "],\"curson\":" + page + ",\"totalPages\":" + jobs.size() / 12 + "}");
                // jeble riešenie ale na teraz musí postačiť
        return json;
    }

    /* v irsku som chcel isť na koncert Portera Robinsona, aj by som išiel
     * keby sme boli v Dubline a keby nebol o 5 dní skôr než tam prídeme ..
     * fuck my life, toto mohol byt uleteny zažitok. Teraz tu sedím a dumam o tom
     * ako do piče pridam data do jsonu bez toho aby som napisal kokotinu
     * oh well.... jebať na to */

}
