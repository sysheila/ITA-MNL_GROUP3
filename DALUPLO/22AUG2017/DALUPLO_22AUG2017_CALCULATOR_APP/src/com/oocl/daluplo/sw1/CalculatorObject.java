package com.oocl.daluplo.sw1;

import com.oocl.castich.sw1.Calculator;
import com.oocl.castich.sw1.CalculatorService;

public class CalculatorObject {
	CalculatorService calService = new CalculatorService();
	Calculator calculator = calService.getCalculatorPort();
	
	public double adder(double x, double y) {
		return this.calculator.add(x,y);
	}
	public double subtracter(double x, double y) {
		return this.calculator.substract(x,y);
	}
	public double multiplier(double x, double y) {
		return this.calculator.multiply(x,y);
	}
	public double divider(double x, double y) {
		return this.calculator.divide(x,y);
	}
	
	
}
