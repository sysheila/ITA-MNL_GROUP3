package com.oocl.berinju.sw2;

public class SW2_Drawer {
	private SW2_Shape shape;
	
	public SW2_Drawer(){
		
	}

	public SW2_Shape getShape() {
		return shape;
	}

	public void setShape(SW2_Shape shape) {
		this.shape = shape;
	}
	
	public void drawShape(){
		shape.draw();
	}
	
	
}
