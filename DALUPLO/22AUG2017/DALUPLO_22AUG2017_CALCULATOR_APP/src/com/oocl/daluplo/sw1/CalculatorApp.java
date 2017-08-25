package com.oocl.daluplo.sw1;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.oocl.castich.sw1.*;

public class CalculatorApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		CalculatorService calService = (CalculatorService) context.getBean("calcService");
		Calculator calculator = calService.getCalculatorPort();
		Scanner scanner = new Scanner(System.in);
		
		while(true){
			System.out.println("[1] Add");
			System.out.println("[2] Subtract");
			System.out.println("[3] Multiply");
			System.out.println("[4] Divide");
			System.out.println("[5] Exit");
			int choice = 0;
			double x;
			double y;
			choice = scanner.nextInt();
			
			if(choice==1) {
				System.out.println("====== Addition ======");
				System.out.println("x: ");
				x = scanner.nextDouble();
				System.out.println("y: ");
				y = scanner.nextDouble();
				System.out.println("Sum: " + calculator.add(x, y));
				System.out.println("======================");
			}
			else if(choice==2) {
				System.out.println("====== Subtract ======");
				System.out.println("x: ");
				x = scanner.nextDouble();
				System.out.println("y: ");
				y = scanner.nextDouble();
				System.out.println("Difference: " + calculator.substract(x, y));
				System.out.println("======================");
			}
			else if(choice==3) {
				System.out.println("====== Multiply ======");
				System.out.println("x: ");
				x = scanner.nextDouble();
				System.out.println("y: ");
				y = scanner.nextDouble();
				System.out.println("Product: " + calculator.multiply(x, y));
				System.out.println("======================");
			}
			else if(choice==4) {
				System.out.println("====== Divide ======");
				System.out.println("x: ");
				x = scanner.nextDouble();
				System.out.println("y: ");
				y = scanner.nextDouble();
				System.out.println("Quotient: " + calculator.divide(x, y));
				System.out.println("======================");
			}
			else if(choice==5) {
				System.out.println("Calculator Closing");
				System.out.println("======================");
				break;
			}
				
		}


	}
	

}
