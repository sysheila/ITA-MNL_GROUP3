package com.oocl.berinju.hw1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HW1_App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("HW1_Beans.xml");
		HW1_AnimalFactory dog = (HW1_AnimalFactory) context.getBean("factory");  
		dog.makeSound();
		HW1_AnimalFactory cat = (HW1_AnimalFactory) context.getBean("factory2");  
		cat.makeSound();
	}

}
