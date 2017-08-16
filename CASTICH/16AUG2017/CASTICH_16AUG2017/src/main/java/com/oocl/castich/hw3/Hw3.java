package com.oocl.castich.hw3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Hw3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext("hw3-bean.xml");
		
		Employee employee = (Employee) context.getBean("employeeChild1");
		employee.print();
		
		System.out.println("");
		
		employee = (Employee) context.getBean("employeeChild2");
		employee.print();
		
		
	}

}

class Employee{
	String id;
	String name;
	String company;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	
	public void print() {

		System.out.println("Employee ID: "+this.getId());
		System.out.println("Name: "+this.getName());
		//Should inherit from parent
		System.out.println("Company: "+this.getCompany()+" (Inherited from parent bean)");
	}
}
