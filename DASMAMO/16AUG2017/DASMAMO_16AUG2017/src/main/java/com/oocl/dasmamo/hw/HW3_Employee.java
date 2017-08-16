package com.oocl.dasmamo.hw;

public class HW3_Employee {
		String company;
		String name;
		String role;
		String empID;
		
		public String getCompany() {
			return company;
		}
		public void setCompany(String company) {
			this.company = company;
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
		public String getEmpID() {
			return empID;
		}
		public void setEmpID(String empID) {
			this.empID = empID;
		}
		public void listAll() {
			System.out.println(this.getCompany());
			System.out.println(this.getName());
			System.out.println(this.getRole());
			System.out.println(this.getEmpID());
		}
		public void init() {
			System.out.println("Initializing...");
		}
		public void cleanUp() {
			System.out.println("Cleaning...");
		}

}
