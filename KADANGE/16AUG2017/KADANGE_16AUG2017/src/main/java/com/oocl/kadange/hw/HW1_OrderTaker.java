package com.oocl.kadange.hw;

public class HW1_OrderTaker {
	private HW1_Order order;

	public HW1_Order getOrder() {
		return order;
	}

	public void setOrder(HW1_Order order) {
		System.out.println("This is setting the order class...");
		this.order = order;
	}
	
	public void displayOrder() {
		order.displayOrder();
	}

}
