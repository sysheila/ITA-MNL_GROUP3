package com.oocl.castich.hw1sw1;

public class InsufficientFundsException extends Throwable{
	double amount;
	
	public double getAmount() {
		return amount;
	}

	public InsufficientFundsException(double amount) {
		this.amount = amount;	
	}
}
