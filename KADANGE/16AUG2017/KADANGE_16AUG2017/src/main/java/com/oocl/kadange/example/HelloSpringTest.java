package com.oocl.kadange.example;

public class HelloSpringTest {
	private String message;

	public void getMessage() {
		//return message;
		System.out.println("Your message: "+this.message);
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
