package com.oocl.castich.sw3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class SW3 {
	
	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("sw3-bean.xml");
		Employee employee =  (Employee) context.getBean("employee");
		
		System.out.println("Employee ID: "+employee.getId());
		System.out.println("Name: "+employee.getName());
		System.out.println("Role: "+employee.getRole());
	}	
}

@Service
class Employee{

	int id;
	String role;
	String name;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
