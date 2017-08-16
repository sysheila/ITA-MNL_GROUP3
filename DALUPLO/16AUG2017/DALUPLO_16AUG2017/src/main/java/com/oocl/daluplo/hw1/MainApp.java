package com.oocl.daluplo.hw1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("Beans_hw1.xml");
		Transaction trans = (Transaction) context.getBean("transaction");
		trans.getCustomer();
		trans.getOrder();
		
	}

}
