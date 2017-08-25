package com.oocl.sw;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class calculation {
	
	double value = 0.0;
	
	@WebMethod
	public double add(double x) {
		value +=x;
		return value;
		
	}
	@WebMethod
	public double minus(double x) {
		value -=x;
		return value;
		
	}
	@WebMethod
	public double multiply(double x) {
		value *=x;
		return value;
		
	}
	@WebMethod
	public double divide(double x) {
		value /=x;
		return value;
		
	}

}
