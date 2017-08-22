package com.oocl.berinju.sw1;


public class Calculator{
	
	Adder adder;
	Divider divider;
	Modulo modulo;
	Multiply multiple;
	Power power;
	Subtracter subtracter;
	
	public Calculator(){
		this.adder = new Adder();
		this.divider = new Divider();
		this.modulo = new Modulo();
		this.power = new Power();
		this.multiple = new Multiply();
		this.subtracter = new Subtracter();
	}

}
