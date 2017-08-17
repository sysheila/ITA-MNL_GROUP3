package com.oocl.FRIASLE.SW3;
//SW7
public class Employee {
	String name;
	String role;
	String employeeId;
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
	
	public void print() {
		System.out.println("Name is " + name + "\nRole is " +role + "\nEmployee Id is " + employeeId);
	}

}
