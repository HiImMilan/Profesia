package com.example.profesia.Jobs;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/jobs")
public class JobsController {

    @Autowired
    private JobService jobService;


    // infinity scroll load more jobs
    @GetMapping("/loadJobs")
    public @ResponseBody String getAllJobs(@RequestParam int page) {
        return jobService.getRecentJobs(page);
    }
}
