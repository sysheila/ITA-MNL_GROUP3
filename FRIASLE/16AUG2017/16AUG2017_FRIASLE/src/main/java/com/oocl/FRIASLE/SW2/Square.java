package com.oocl.FRIASLE.SW2;

public class Square extends Shape {
	String name;

	public void draw() {
		System.out.println("Draw "+ name);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
