package com.oocl.FRIASLE.HW2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;



public class main {
	public static void main(String[] args) {

		ApplicationContext objOne = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/HW2/bean.xml");
		NetworkManager contextOne = (NetworkManager) objOne.getBean("net");
		contextOne.connect();
		contextOne.disconnect();
		((AbstractApplicationContext) objOne).close();
	}

}
