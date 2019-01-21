package com.mastek.EnterpriseApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EnterpriseAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnterpriseAppApplication.class, args);
		System.out.println("Welcome to Enterprise App");
		simplePrint("Project done using GIT");
	}
	
	public static void simplePrint(String message) {
		System.out.println(message);
		
	}
	
	public static void method61081(String main) {
		System.out.println("👌🔥  Method written by 61081 🔥 👌");
	}
}

