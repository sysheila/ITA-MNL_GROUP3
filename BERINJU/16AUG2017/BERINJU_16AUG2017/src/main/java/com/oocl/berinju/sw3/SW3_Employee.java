package com.oocl.berinju.sw3;

public class SW3_Employee {
	private String name;
	private String number;
	private String address;
	
	public SW3_Employee(){
		
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	public void printu(){
		System.out.println(this.name);
		System.out.println(this.number);
		System.out.println(this.address);
	}
}
