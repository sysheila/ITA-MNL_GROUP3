package com.oocl.dasmamo.sw;

public class InsufficientBalanceException extends Throwable{
	private double amount;
	public InsufficientBalanceException(double amount) {
		this.amount = amount;
		System.out.println("Insufficient balance " + amount);
	}
	
	public double getAmount() {
		return amount;
	}

}
