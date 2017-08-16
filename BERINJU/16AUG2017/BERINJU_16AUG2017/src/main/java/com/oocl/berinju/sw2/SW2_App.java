package com.oocl.berinju.sw2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW2_App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext ("SW2_Beans.xml");
		SW2_Drawer circ = (SW2_Drawer) context.getBean("drawer");  
		circ.drawShape();
		SW2_Drawer rec = (SW2_Drawer) context.getBean("drawerRec");  
		rec.drawShape();
	}

}
