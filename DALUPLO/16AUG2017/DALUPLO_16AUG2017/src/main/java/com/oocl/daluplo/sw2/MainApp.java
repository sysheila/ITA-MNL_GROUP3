package com.oocl.daluplo.sw2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class MainApp {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext ("Beans_sw2.xml");
		Drawing drawing = (Drawing) context.getBean("drawShapes");
		Drawing drawing2 = (Drawing) context.getBean("drawShapes2");
		Shape triangle = (Triangle) context.getBean("drawTriangle");
//		Shape circle = (Circle) context.getBean("drawCircle");
		
//		drawing.setShape(triangle);
		drawing.drawShape();
		drawing2.drawShape();
//		
//		drawing.setShape(triangle);
//		drawing.drawShape();
//		

	}
}
