package com.oocl.castich.sw2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Shape {
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("sw2-bean.xml");
		Drawing draw =  (Drawing) context.getBean("drawing");
		Shape tri =  (Shape) context.getBean("triangle");
		draw.drawShape();
		draw.setShape(tri);
		draw.drawShape();
	}
	
	public void draw() {}
}

class Triangle extends Shape{
	public void draw() {
		System.out.println("Triangle drawing...");
	}
}

class Circle extends Shape{
	public void draw() {
		System.out.println("Circle drawing...");
	}
}

class Drawing{
	Shape shape;

	public void setShape(Shape shape) {
		this.shape = shape;
	}
	
	public void drawShape() {
		this.shape.draw();
	}
	
}
