package com.oocl.castich.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloSpringTest {

	String message;

	public void getMessage() {
		System.out.println("Your message : "+this.message);
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		
		HelloSpringTest objA = (HelloSpringTest) context.getBean("helloSpring");
		objA.setMessage("Hay low dude!");
		objA.getMessage();

		HelloSpringTest objB = (HelloSpringTest) context.getBean("helloSpring");
		objB.getMessage();
		
		
		HelloSpring_init_test test = (HelloSpring_init_test) context.getBean("helloSpringInitTest");
		test.getMessage();
		
	}
	
}
