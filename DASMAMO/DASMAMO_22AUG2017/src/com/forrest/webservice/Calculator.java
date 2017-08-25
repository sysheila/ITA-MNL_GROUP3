package com.forrest.webservice;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;

import com.forrest.webservice.business.CalculatorOperations;

@WebService
public class Calculator {
	
	CalculatorOperations  calculatorOperations = new CalculatorOperations();

	@WebMethod
/*	public List<String> Operations() {
		return calculatorOperations.getCalcuOperations();
		List<String> categories = new ArrayList<>();
		categories.add("Books");
		categories.add("Music");
		categories.add("Movies");
		categories.add("FastFood");
		return categories;
	}*/
	  public double getCalcuResult(double num1, double num2, String operation){
		  return calculatorOperations.getOperation(num1, num2, operation);
	  }
	  public double getSum(double num1, double num2){
		  return calculatorOperations.getOperation(num1, num2, "add");
	  }
	  public double getDifference(double num1, double num2){
		  return calculatorOperations.getOperation(num1, num2, "subtract");
	  }
	  public double getQuotient(double num1, double num2){
		  return calculatorOperations.getOperation(num1, num2, "divide");
	  }
	  public double getProduct(double num1, double num2){
		  return calculatorOperations.getOperation(num1, num2, "multiply");
	  }
	  public double getModulo(double num1, double num2){
		  return calculatorOperations.getOperation(num1, num2, "modulo");
	  }
}
