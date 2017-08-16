package com.oocl.berinju.hw3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HW3_App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("HW3_Beans.xml");
		HW3_CEO obj = (HW3_CEO) context.getBean("ceo");
		obj.printu();
	}

}
