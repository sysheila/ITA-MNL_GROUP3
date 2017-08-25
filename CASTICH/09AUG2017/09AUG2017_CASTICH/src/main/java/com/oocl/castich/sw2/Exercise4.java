package com.oocl.castich.sw2;

import java.util.Scanner;

public class Exercise4 {

	public static void main(String[] args) {
		boolean done = false;
		double amount = 0;
		Scanner scan = new Scanner(System.in);
		System.out.print("Enter account deposit: ");
		amount = scan.nextDouble();
		Account account = new Account(amount);
		System.out.print("Enter amount to be withdrawn: ");
		amount = scan.nextDouble();
		
		try {
			account.withdraw(amount);
			System.out.println("Remaining: "+account.getDeposit());
		} catch (InsufficientFundsException e) {
			// TODO Auto-generated catch block
			System.out.println("Insufficient funds! You are "+e.getAmount()+" short of money.");
//			e.printStackTrace();
		}
	}
	
	
}

class InsufficientFundsException extends Throwable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	double amount;
	
	public double getAmount() {
		return amount;
	}

	public InsufficientFundsException(double amount) {
		this.amount = amount;	
	}
}

class Account{
	private double deposit;
	
	public Account(double deposit) {
		this.deposit = deposit;
	}
	
	public double withdraw(double amount) throws InsufficientFundsException{
		if(amount>this.getDeposit()) {
			throw new InsufficientFundsException(amount-this.getDeposit());
		}
		deposit-=amount;
		return deposit;
	}
	
	public double withdrawTest(double amount) {
		return amount;
	}

	public double getDeposit() {
		return deposit;
	}

	public void setDeposit(double deposit) {
		this.deposit = deposit;
	}
}