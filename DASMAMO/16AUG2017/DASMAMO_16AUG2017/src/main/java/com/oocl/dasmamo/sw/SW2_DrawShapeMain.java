package com.oocl.dasmamo.sw;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW2_DrawShapeMain {

	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		SW2_Drawing draw =  (SW2_Drawing) context.getBean("drawShapes");
		draw.setShape(new SW2_Triangle());
		draw.draw();
		draw.setShape(new SW2_Rectangle());
		draw.draw();
	}

}
