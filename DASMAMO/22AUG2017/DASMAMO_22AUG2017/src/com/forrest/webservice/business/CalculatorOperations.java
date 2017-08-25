package com.forrest.webservice.business;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;

public class CalculatorOperations {
	@XmlType (name="Operation")
	@XmlEnum
	public enum Operation{
		ADD,
		SUBTRACT
	}
	public List<String> getCalcuOperations() {

		List<String> operation = new ArrayList<>();
		operation.add("add");
		operation.add("subtract");
		operation.add("multiply");
		operation.add("modulo");
		operation.add("divide");
		return operation;
	}
	public double getOperation(double num1, double num2, String operation){
		switch (operation.toLowerCase()) {
		case "add":
			return  num1+num2;	
		case "subtract":
			return num1-num2;
		case "divide":
			if(num2==0) {
				return 0;
			}
			else {
				return num1/num2;
			}
			
		case "multiply":
			return num1*num2;
		case "modulo":
			return num1%num2;
		}	
		return 0;
		
	}
}
