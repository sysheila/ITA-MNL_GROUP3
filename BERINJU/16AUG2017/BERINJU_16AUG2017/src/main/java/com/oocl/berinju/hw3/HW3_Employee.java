package com.oocl.berinju.hw3;

public class HW3_Employee {

	private String name;
	private String number;
	private String address;
	private String salary;
	private String company;
	
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public HW3_Employee(){
		
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
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public void printu(){
		System.out.println(this.name);
		System.out.println(this.number);
		System.out.println(this.address);
		System.out.println(this.salary);
		System.out.println(this.company);

	}

}
