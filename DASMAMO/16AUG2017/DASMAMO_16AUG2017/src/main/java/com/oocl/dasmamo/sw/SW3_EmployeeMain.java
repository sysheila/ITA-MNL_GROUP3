package com.oocl.dasmamo.sw;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW3_EmployeeMain {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		SW3_Employee emp =  (SW3_Employee) context.getBean("listEmployee");
		emp.listAll();
	}

}
