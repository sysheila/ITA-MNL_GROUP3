package com.oocl.daluplo.hw2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("Beans_hw2.xml");
		NetworkManager netManager = (NetworkManager) context.getBean("netMan");
		//netManager.init();
		//netManager.destroy();
		((AbstractApplicationContext) context).close();
	}

}
