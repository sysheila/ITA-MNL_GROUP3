package com.oocl.daluplo.sw3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans_sw3.xml");
		Employee emp = (Employee) context.getBean("employee1");		
		emp.printInfo();

	}

}


