package com.oocl.castich.sw1;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.oocl.daluplo.calc.CalculatorService;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		
		CalculatorService calc = (CalculatorService) context.getBean("calculatorService");
		com.oocl.daluplo.calc.Calculator calculator = calc.getCalculatorPort();
		
		System.out.println(calculator.add(5, 4)); 
		System.out.println(calculator.subtract(10, 4)); 
		System.out.println(calculator.multiply(3, 3)); 
		System.out.println(calculator.divide(20, 4));
		
	}

}
