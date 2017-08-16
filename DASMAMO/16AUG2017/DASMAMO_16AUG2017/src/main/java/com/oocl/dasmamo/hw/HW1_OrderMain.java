package com.oocl.dasmamo.hw;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HW1_OrderMain {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("HW_Beans.xml");
		HW1_Order order = (HW1_Order) context.getBean("listOrder");
	
		order.setItem(new HW1_NameOrder());
		order.setPrice(new HW1_PriceOrder());
		order.setAddress(new HW1_AddressOrder());
		
		order.orderName();
		order.orderAddress();
		order.orderPrice();
	}

}
