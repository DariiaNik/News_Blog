package com.example.newsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.newsapi")
@EntityScan(basePackages = "com.example.newsapi")
public class NewsApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewsApiApplication.class, args);
	}

}
