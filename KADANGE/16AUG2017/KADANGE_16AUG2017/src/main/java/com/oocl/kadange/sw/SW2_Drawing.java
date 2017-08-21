package com.oocl.kadange.sw;


public class SW2_Drawing {
	
	private SW2_Shape shape;

	public void setShape(SW2_Shape shape) {
		System.out.println("Inside setShape...");
		this.shape = shape;
	}
	
	public SW2_Shape getShape() {
		return shape;
	}
	
	public void drawShape(){
		shape.draw();
	}
	
}
