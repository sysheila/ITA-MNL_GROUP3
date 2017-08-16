package com.oocl.berinju.hw2;

public class HW2_NetworkManager {
	private String message;
	private HW2_HTTPConnection conn;

	public void setMessage(String message) {
		this.message = message;
	}

	public void getMessage() {
		System.out.println("Your Message : " + message);
	}

	public void init() {
		System.out.println("Bean is going through initialization...");
		this.conn = new HW2_HTTPConnection();
	}
	public void destroy() {
		this.conn.close();
		System.out.println("Bean will be destroyed now.");
	}

	
}
