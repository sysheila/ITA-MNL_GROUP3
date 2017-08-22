package calcws;

import java.util.Scanner;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW2_CalcLogging_Friasle {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		double num;
		AbstractApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		CalcMain cal = (CalcMain) context.getBean("calcu");	
		System.out.println("Enter a double");
		num = scan.nextDouble();
		System.out.println("==============================================");
		System.out.println("Product:" + cal.getProduct(num));
		System.out.println("==============================================");
		System.out.println("Difference:" + cal.getDiff(num));
		System.out.println("==============================================");
		System.out.println("Quotient:"+ cal.getQuotient(num));
		System.out.println("==============================================");
		System.out.println("Sum:" + cal.getSum(num));
		System.out.println("==============================================");
		

	}
}
