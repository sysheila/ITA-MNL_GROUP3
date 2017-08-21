package com.oocl.kadange.example;

public class HelloSpringTest_InitDestroy {
	private String message;

	public void getMessage() {
		//return message;
		System.out.println("Your message: "+this.message);
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public void init(){
		System.out.println("Spring initializing...");
	}
	
	public void destroy(){
		System.out.println("Spring closing...");
	}

}
