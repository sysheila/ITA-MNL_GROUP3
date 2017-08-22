package com.oocl.kadange.sw;

import java.util.List;

import javax.jws.*;

@WebService
public class SW1_WebCal {

	SW1_Calculator calculator = new SW1_Calculator();
	
	//Annotation @WebMethod is I think automatically called in @WebService
	@WebMethod
	public List<String> getCalMethod() {
		return calculator.getCalMethod();
	}
	
	public double calculate(String method, double x, double y){
		return calculator.calculate(method, x, y);
	}
}
