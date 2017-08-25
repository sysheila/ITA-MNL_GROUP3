package com.oocl.hw;

import com.forrest.webservice.Calculator;
import com.forrest.webservice.CalculatorService;

public class model {
	
	CalculatorService calc = new CalculatorService();
	Calculator cal = calc.getCalculatorPort();
	
	public double getDifference(double x, double y) {	
		return this.cal.getDifference(x, y);
	}
	public double getAddition(double x, double y) {	
		return this.cal.getSum(x, y);
	}
	public double getModulo(double x, double y) {	
		return this.cal.getModulo(x, y);
	}
	public double getQuotient(double x, double y) {	
		return this.cal.getQuotient(x, y);
	}
	public double getProduct(double x, double y) {	
		return this.cal.getProduct(x, y);
	}

}
