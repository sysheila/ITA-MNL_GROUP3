package com.oocl.dasmamo.sw;

public class BankAccount {
	public int balance;
	public BankAccount() {
		// TODO Auto-generated constructor stub
	}
	
	public int deposit(double amount) {
		System.out.println("Depositing " + amount + "...");
		return balance += amount;
	}
	
	public int withdraw(double amount) {
		System.out.println("Withraw " + amount + "...");
		return balance -= amount;
	}
	
	public int getBalance() {
		System.out.println("New Balance is: " + balance);
		return balance;
	}

}
