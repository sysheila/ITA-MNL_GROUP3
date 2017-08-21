package com.oocl.dasmamo.sw;

public class SW3_Employee {
	String name;
	String role;
	String empID;
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
	public String getEmpID() {
		return empID;
	}
	public void setEmpID(String empID) {
		this.empID = empID;
	}
	public void listAll() {
		System.out.println(this.getName());
		System.out.println(this.getRole());
		System.out.println(this.getEmpID());
	}
	
}
