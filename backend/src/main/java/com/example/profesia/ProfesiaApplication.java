package com.example.profesia;

import java.io.IOException;

import com.example.profesia.Jobs.JobSeeder;
import com.example.profesia.User.UserSeeder;

import org.hibernate.boot.model.relational.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProfesiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProfesiaApplication.class, args);
	}

	@Autowired
	private DatabaseSeeder databaseSeeder;

}
