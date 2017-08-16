package com.oocl.dasmamo.sw.spring;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp_init_dest {
	private void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		HelloSpring_init_dest obj = (HelloSpring_init_dest) context.getBean("helloSpring3");
		obj.getMessage();
		context.registerShutdownHook();
		
	}
}
