package com.oocl.dasmamo.hw;

public class HW1_Order {
	HW1_NameOrder item;
	HW1_PriceOrder price;
	HW1_AddressOrder address;

	
	public HW1_NameOrder getItem() {
		return item;
	}

	public void setItem(HW1_NameOrder item) {
		this.item = item;
	}

	public HW1_PriceOrder getPrice() {
		return price;
	}

	public void setPrice(HW1_PriceOrder price) {
		this.price = price;
	}

	public HW1_AddressOrder getAddress() {
		return address;
	}

	public void setAddress(HW1_AddressOrder address) {
		this.address = address;
	}

	public void orderName() {
		this.item.orderName();
	}
	
	public void orderPrice() {
		this.price.orderPrice();
	}
	
	public void orderAddress() {
		this.address.orderAddress();
	}
	
}
