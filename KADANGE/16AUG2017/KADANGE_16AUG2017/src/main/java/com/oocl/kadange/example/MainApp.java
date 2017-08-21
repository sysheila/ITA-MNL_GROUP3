package com.oocl.kadange.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		//Hello Spring Sample
//		AbstractApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		HelloSpringTest obj = (HelloSpringTest) context.getBean("helloSpring");
//		obj.getMessage();
		
		//Spring Scope sample
//		AbstractApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		HelloSpringTest_Scope objA = (HelloSpringTest_Scope) context.getBean("helloSpring2");
//		objA.setMessage("Spring Scope 1");
//		objA.getMessage();
//		
//		HelloSpringTest_Scope objB = (HelloSpringTest_Scope) context.getBean("helloSpring2");
//		objB.getMessage();
		
		//Spring init and destroy sample
//		AbstractApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
//		HelloSpringTest_InitDestroy obj = (HelloSpringTest_InitDestroy) context.getBean("helloSpring3");
//		obj.getMessage();
//		context.registerShutdownHook();
		
		//Spring (NOT Complete)
		ApplicationContext context = new ClassPathXmlApplicationContext ("Beans.xml");
		TextEditor te = (TextEditor) context.getBean("textEditor");
		te.spellCheck();
	}

}
