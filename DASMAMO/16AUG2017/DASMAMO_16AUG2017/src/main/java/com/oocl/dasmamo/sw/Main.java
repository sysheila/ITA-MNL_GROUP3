package com.oocl.dasmamo.sw;

import org.omg.CORBA.OBJ_ADAPTER;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		SpringTest obj1 =  (SpringTest) context.getBean("helloSpring");
		obj1.setMessage("Yooo! I'm an object A");
		obj1.getMessage();
		
		SpringTest obj2 =  (SpringTest) context.getBean("helloSpring");
		obj2.getMessage();
	}

}
