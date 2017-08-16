package com.oocl.daluplo.sw2;

public class Drawing {
	private Shape shape;

	public void drawShape() {
		this.shape.draw();
	}

	public void setShape(Shape shape) {
		this.shape = shape;
	}
	
	
}
