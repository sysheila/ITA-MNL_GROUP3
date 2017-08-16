package com.oocl.daluplo.hw1;

public class Transaction {
	Customer customer;
	Order order;

	
	public void getCustomer() {
		this.customer.printName();
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public void getOrder() {
		this.order.printOrder();
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Transaction() {
		// TODO Auto-generated constructor stub
	}

}
