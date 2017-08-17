package com.oocl.FRIASLE.HW3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class main {
	public static void main(String[] args) {
		ApplicationContext objOne = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/HW3/bean.xml");
		Employee contextOne = (Employee) objOne.getBean("myEmployeeBean");
		System.out.println(contextOne.toString());
	}
}
