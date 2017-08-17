package com.oocl.FRIASLE.SW3;
//SW7
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


public class main {

	public static void main(String[] args) {
		ApplicationContext obj = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/SW3/bean.xml");
		Employee context = (Employee) obj.getBean("emp1");
		context.print();
		
	}

}
