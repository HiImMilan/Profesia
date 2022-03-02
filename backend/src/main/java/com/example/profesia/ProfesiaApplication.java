package com.example.profesia;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import com.example.profesia.Jobs.Job;
import com.example.profesia.Jobs.JobRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProfesiaApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ProfesiaApplication.class, args);	
	}

	@Autowired
	private JobRepository repository;
	@Override
    public void run(String... args) throws IOException {
        Iterable<Job> jobs = this.repository.findAll();
		FileWriter  myObj = new FileWriter ("test.json");
		
		// map object to json file
		ObjectMapper mapper = new ObjectMapper();
		// write to file
		String json;
		try {
			json = mapper.writeValueAsString(jobs);
			myObj.write(json);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		myObj.close();
		
		
    }

}
