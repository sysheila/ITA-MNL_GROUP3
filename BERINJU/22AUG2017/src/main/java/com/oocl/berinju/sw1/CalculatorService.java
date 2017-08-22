package com.oocl.berinju.sw1;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class CalculatorService {
	Calculator calculator = new Calculator();
	
	/* To use the web service : CalculatorService.compute(operator, operand1, operand2)
	 * where 
	 * 		operator can be (add/sub/mul/div/pow/mod)
	 * 		and operand1 & operand2 are both of type double.
	 * */
	@WebMethod
	public double compute(String operation, double a, double b) {
		double result = 0;
		switch(operation){
			case "add" : result = calculator.adder.add(a, b); break;
			case "sub" : result = calculator.subtracter.subtract(a, b); break;
			case "div" : result = calculator.divider.divide(a, b); break;
			case "mul" : result = calculator.multiple.multiply(a, b); break;
			case "pow" : result = calculator.power.getMultiply(a, b); break;
			case "mod" : result = calculator.modulo.modulo(a, b); break;
		}
		return result;
	}
}
