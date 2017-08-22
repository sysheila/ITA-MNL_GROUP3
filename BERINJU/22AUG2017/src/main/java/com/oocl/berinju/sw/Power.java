package com.oocl.berinju.sw;

import java.util.function.Function;

public class Power {
//	public double getPower(double a) {
//		return multiply(a, a, a);
//
//	}
	
	public double getMultiply(double base, double powerRaised) {
		if(powerRaised != 0) {
			return (base * getMultiply(base, powerRaised-1));
		}
		else
		return 1;
		
	}
	

//	public double multiply(double a, double b, double c) {
//		
//		if(c > 1.0) {
//			multiply(a*b,b,c-1);
//		}
//		return a;
//		
//	}
	
	


}
