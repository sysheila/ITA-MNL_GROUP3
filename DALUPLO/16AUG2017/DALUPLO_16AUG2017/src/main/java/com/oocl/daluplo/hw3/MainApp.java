package com.oocl.daluplo.hw3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans_hw3.xml");
		Employee emp = (Employee) context.getBean("employee1");		
		Employee emp2 = (Employee) context.getBean("employee2");	
		Employee emp3 = (Employee) context.getBean("employee3");		
		emp.printInfo();
		emp2.printInfo();
		emp3.printInfo();

	}

}


