package com.example.profesia;

import java.io.IOException;

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
	private DatabaseSeeder databaseSeeder;

	@Override
	public void run(String... args) throws IOException {

		boolean fillDatabase = true;
		if (fillDatabase) {

			databaseSeeder.Seed();

		}
	}

}
