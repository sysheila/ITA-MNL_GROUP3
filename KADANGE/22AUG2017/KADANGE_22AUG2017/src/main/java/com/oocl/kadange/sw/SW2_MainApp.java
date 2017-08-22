package com.oocl.kadange.sw;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW2_MainApp {

	public static void main(String[] args) {
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		SW2_CalWS cal = (SW2_CalWS)context.getBean("calculator");
		
//		cal.setX(7.8);
//		cal.setY(9.7);
//		cal.getX();
//		cal.getY();
		System.out.println("=============================================");
		cal.computeAdd(3.7, 4.3);
		System.out.println("=============================================");
		cal.computeDiff(5, 2.5);
		System.out.println("=============================================");
		cal.computeMul(10, 2.5);
		System.out.println("=============================================");
		cal.computeDiv(25, 5.5);
		System.out.println("=============================================");
		cal.computePow(5.5, 4);
		System.out.println("=============================================");
		cal.computeMod(93, 3);
		System.out.println("=============================================");
	}

}
