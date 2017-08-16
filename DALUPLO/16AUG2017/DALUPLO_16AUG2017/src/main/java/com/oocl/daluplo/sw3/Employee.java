package com.oocl.daluplo.sw3;

public class Employee {
	String name;
	String role;
	String employeeId;
	
	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmployeeId() {
		return employeeId;
	}

	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public void printInfo() {
		System.out.println("Name: "+ this.name);
		System.out.println("Role: "+ this.role);
		System.out.println("Employee Id: "+ this.employeeId);
	}

}
