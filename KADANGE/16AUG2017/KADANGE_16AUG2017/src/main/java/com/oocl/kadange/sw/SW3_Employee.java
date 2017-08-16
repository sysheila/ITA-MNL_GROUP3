package com.oocl.kadange.sw;

public class SW3_Employee {
	private String name;
	private String role;
	private int empId;
	
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
	public int getEmpId() {
		return empId;
	}
	public void setEmpId(int empId) {
		this.empId = empId;
	}
	public void printInfo(){
		System.out.println("Name: "+this.name);
		System.out.println("Role: "+this.role);
		System.out.println("Employee ID: "+this.empId);
	}

}
