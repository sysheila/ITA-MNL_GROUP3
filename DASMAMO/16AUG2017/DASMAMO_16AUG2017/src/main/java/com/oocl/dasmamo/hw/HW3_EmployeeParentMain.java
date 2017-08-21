package com.oocl.dasmamo.hw;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HW3_EmployeeParentMain {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("HW_Beans.xml");
		HW3_Employee emp =  (HW3_Employee) context.getBean("employeeChild");
		emp.listAll();
		context.registerShutdownHook();
	}
}
