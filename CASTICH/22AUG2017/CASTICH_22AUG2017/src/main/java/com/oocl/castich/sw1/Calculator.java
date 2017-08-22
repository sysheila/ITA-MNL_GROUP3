package com.oocl.castich.sw1;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class Calculator {
	CalculatorImpl service = new CalculatorImpl();
	
	@WebMethod
	public double add(double a, double b) {
		return service.add(a, b);
	}
	
	@WebMethod
	public double subtract(double a, double b) {
		return service.subtract(a, b);
	}
	
	
	@WebMethod
	public double multiply(double a, double b) {
		return service.multiply(a, b);
	}
	
	@WebMethod
	public double divide(double a, double b) {
		return service.divide(a, b);
	}
}
