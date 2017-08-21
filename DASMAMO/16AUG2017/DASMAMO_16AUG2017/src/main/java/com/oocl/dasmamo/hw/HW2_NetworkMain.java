package com.oocl.dasmamo.hw;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class HW2_NetworkMain {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("HW_Beans.xml");
		HW2_NetworkManager network =  (HW2_NetworkManager) context.getBean("networkManager");
		network.inNetwork();
		context.registerShutdownHook(); 
	}

}
