package com.oocl.FRIASLE.SW2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class main {

	public static void main(String[] args) {

		ApplicationContext obj = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/SW2/shapeBean.xml");
		
//		Square Square = (Square) obj.getBean("Square");
//		
//		Triangle Triangle = (Triangle) obj.getBean("Triangle");
//		
		
		Drawing draw2 = (Drawing) obj.getBean("Circle");
		Drawing draw3 = (Drawing) obj.getBean("Oct");

//		Drawing drawing = new Drawing();
		
		
//		drawing.setShape(Square);
//		drawing.drawShape();
//		
//		drawing.setShape(Triangle);
//		drawing.drawShape();
		
		draw2.drawShape();
		draw3.drawShape();
		
	}

}
