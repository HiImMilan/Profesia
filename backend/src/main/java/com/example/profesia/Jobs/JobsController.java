package com.example.profesia.Jobs;

import java.util.Date;
import java.util.List;

import com.example.profesia.User.User;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/jobs")
public class JobsController {

    @Autowired
    private JobService jobService;

    // infinity scroll load more jobs
    @GetMapping("/loadJobs")
    public @ResponseBody JobResponse getAllJobs(@RequestParam int page) {
        return jobService.getRecentJobs(page);
    }

    @RequestMapping(path = "/createJob", method = POST, consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public @ResponseBody String createJobs(@RequestParam MultiValueMap<String, String> userFormData) {

        // date from unix timestamp
        Date endDate = new Date(Long.parseLong(userFormData.getFirst("endDate")));
        jobService.addJob(new Job(userFormData.getFirst("title"), userFormData.getFirst("description"), userFormData.getFirst("bannerPic"), null, userFormData.getFirst("name"), userFormData.getFirst("profilePic"), userFormData.getFirst("category"), null, new Date(), new Date(), endDate));
        return "OK";
    }

}
