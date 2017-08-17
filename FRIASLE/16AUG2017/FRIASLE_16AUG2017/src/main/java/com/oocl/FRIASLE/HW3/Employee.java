package com.oocl.FRIASLE.HW3;

public class Employee {

	private int empId;
	private String name;
	private String company;

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
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

	@Override
	public String toString() {
		return this.empId + " | " + this.name + " | " + this.company;
	}

}
