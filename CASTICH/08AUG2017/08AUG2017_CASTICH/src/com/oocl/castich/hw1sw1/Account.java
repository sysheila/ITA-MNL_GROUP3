package com.oocl.castich.hw1sw1;

public class Account{
	private double deposit;
	private String number;
	private String pin;
	
	public Account(double deposit) {
		this.deposit = deposit;
	}
	
	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public double getDeposit() {
		return deposit;
	}

	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}
	
	public double withdraw(double amount) throws InsufficientFundsException{
		if(amount>this.getDeposit()) {
			throw new InsufficientFundsException(amount-this.getDeposit());
		}
		deposit-=amount;
		return amount;
	}
}