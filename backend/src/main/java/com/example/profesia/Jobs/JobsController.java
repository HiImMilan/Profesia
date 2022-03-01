package com.example.profesia.Jobs;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/jobs")
public class JobsController {

    @Autowired
    private JobService jobService;

    @GetMapping("/all")
    public @ResponseBody Iterable<Job> getAllJobs() {
        return this.jobService.getJobs();
    }
}
