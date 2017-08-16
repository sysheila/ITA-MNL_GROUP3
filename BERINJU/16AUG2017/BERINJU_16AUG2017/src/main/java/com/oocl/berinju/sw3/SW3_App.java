package com.oocl.berinju.sw3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW3_App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("SW3_Beans.xml");
		SW3_Employee emp = (SW3_Employee) context.getBean("employees");
		emp.printu();
	}

}
