package com.example.profesia.Jobs;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobsController {

    @Autowired
    private JobService jobService;

    @GetMapping("/jobs")
    public @ResponseBody String getJobs() {
        String temp = "";
        Iterator<Job> it = jobService.getJobs().iterator();
        while (it.hasNext()) {
            temp += it.next().toString() + ",";
        }
        return temp;
    }
}
