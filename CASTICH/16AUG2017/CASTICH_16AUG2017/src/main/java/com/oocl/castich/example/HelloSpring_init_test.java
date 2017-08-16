package com.oocl.castich.example;

public class HelloSpring_init_test {

	String message;
	
	public void init() {
		System.out.println("Initializing database...");
	}
	
	public void destroy() {
		System.out.println("White house down.");
	}
	
	public void getMessage() {
		System.out.println("Your message : "+this.message);
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
