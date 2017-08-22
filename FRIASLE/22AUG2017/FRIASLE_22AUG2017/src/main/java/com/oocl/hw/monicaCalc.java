package com.oocl.hw;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.forrest.webservice.Calculator;
import com.forrest.webservice.CalculatorService;

import SpringExampleAop.Student;

public class monicaCalc {
	
	public static void main(String[] args) {
		
		ApplicationContext context = new ClassPathXmlApplicationContext("./com/oocl/hw/Beans.xml");
		model calc = (model) context.getBean("calc");
		
		double res = calc.getDifference( 5, 4);
		System.out.println(res);
		
		res = calc.getAddition( 5, 4);
		System.out.println(res);
		
		res = calc.getProduct(5, 4);
		System.out.println(res);
		
		res = calc.getModulo( 6, 2);
		System.out.println(res);
		
		res = calc.getQuotient(6, 2);
		System.out.println(res);
	}

}
