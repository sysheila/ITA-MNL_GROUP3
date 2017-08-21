package com.oocl.kadange.hw;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HW_MainApp {

	public static void main(String[] args) {
		
		
		//Number 4
		//Uncomment to run
//		AbstractApplicationContext context1 = new ClassPathXmlApplicationContext("HW1_Beans.xml");
//		HW1_OrderTaker ot = (HW1_OrderTaker)context1.getBean("takeOrder");
//		ot.displayOrder();
		
		//Number 5
		//Uncomment to run
//		AbstractApplicationContext context2 = new ClassPathXmlApplicationContext("HW1_Beans.xml");
//		HW2_NetworkManager nm = (HW2_NetworkManager)context2.getBean("networkManager");
//		nm.getManager();
//		context2.registerShutdownHook();
		
		//Number 6
		//Uncomment to run
		AbstractApplicationContext context3 = new ClassPathXmlApplicationContext("HW1_Beans.xml");
		HW3_Computer com = (HW3_Computer)context3.getBean("computer");
		com.getMouse();
		com.getKeyboard();
		
		HW3_Laptop lap = (HW3_Laptop)context3.getBean("laptop");
		lap.getMouse();
		lap.getKeyboard();
		lap.getMonitor();
	}

}
