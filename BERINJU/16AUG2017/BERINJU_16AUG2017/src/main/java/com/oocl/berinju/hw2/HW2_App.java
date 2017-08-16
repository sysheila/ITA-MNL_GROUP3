package com.oocl.berinju.hw2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HW2_App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("HW2_Beans.xml");
		HW2_NetworkManager obj = (HW2_NetworkManager) context.getBean("connect");
		obj.getMessage();
		((AbstractApplicationContext) context).registerShutdownHook();
	}

}
