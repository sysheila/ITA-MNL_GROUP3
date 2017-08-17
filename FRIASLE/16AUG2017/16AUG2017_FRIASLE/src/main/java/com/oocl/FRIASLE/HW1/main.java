package com.oocl.FRIASLE.HW1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class main {

	public static void main(String[] args) {
		ApplicationContext obj = new ClassPathXmlApplicationContext("./com/oocl/FRIASLE/HW1/bean.xml");
		Jobs context = (Jobs) obj.getBean("Jobs");
		context.getJobs();
		context.people();
	}

}
