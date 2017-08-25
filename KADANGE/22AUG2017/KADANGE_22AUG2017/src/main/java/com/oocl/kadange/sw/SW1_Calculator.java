package com.oocl.kadange.sw;

import java.util.ArrayList;
import java.util.List;

import com.oocl.kadange.sw.calcomponent.*;

public class SW1_Calculator {
	
	Subtracter sub=null;
	Adder add=null;
	Divider div=null;
	Power pow=null;
	
	
	public SW1_Calculator(){
		this.add = new Adder();
		this.sub = new Subtracter();
		this.div = new Divider();
		this.pow = new Power();
	}
	
	public List<String> getCalMethod(){
		List<String> methods = new ArrayList<String>();
		methods.add("Addition");
		methods.add("Subtraction");
		methods.add("Multiplication");
		methods.add("Division");
		methods.add("Modulo");
		methods.add("Power");
		return methods;
	}
	
	public double getSum(double x, double y){
		return this.add.add(x, y);
	}
	
	public double getDiff(double x, double y){
		return this.sub.subtract(x, y); 
	}
	
	public double getMul(double x, double y){
		return Multiply.multiply(x, y);
	}
	
	public double getDiv(double x, double y){
		return this.div.divide(x, y);
	}
	
	public double getMod(double x, double y){
		return Modulo.modulo(x, y);
	}
	
	public double getPow(double x, double y){
		return this.pow.getMultiply(x, y);
	}

	public double calculate(String method, double x, double y) {
		switch (method.toLowerCase()) {
		case "addition":
			return getSum(x, y);
		case "subtraction":
			return getDiff(x, y);
		case "multiplication":
			return getMul(x, y);
		case "division":
			return getDiv(x, y);
		case "modulo":
			return getMod(x, y);
		case "power":
			return getPow(x, y);
		}
		return 0;
	}

}
