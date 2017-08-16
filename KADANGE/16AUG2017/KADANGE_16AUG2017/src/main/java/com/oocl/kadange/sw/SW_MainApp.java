package com.oocl.kadange.sw;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW_MainApp {
	
	public static void main(String args[]){
		System.out.println("===================================");
		System.out.println("=== SW 2 Dependency Injection =====");
		System.out.println("===================================");
		AbstractApplicationContext context1 = new ClassPathXmlApplicationContext("SW2_Beans.xml");
		SW2_Drawing draw = (SW2_Drawing)context1.getBean("drawingClass");
		draw.drawShape();
		draw.setShape(new SW2_Triangle());
		draw.drawShape();
		
		System.out.println("===================================");
		System.out.println("=== SW 3 Bean Exercise=============");
		System.out.println("===================================");
		AbstractApplicationContext context2 = new ClassPathXmlApplicationContext("SW3_Beans.xml");
		SW3_Employee emp = (SW3_Employee)context2.getBean("employeeList");
		emp.printInfo();
	}

}
