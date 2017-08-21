package com.oocl.castich.hw;

import java.util.Scanner;

public class Banking {

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
		} catch (InsufficientFundsException e) {
			// TODO Auto-generated catch block
			System.out.println("Insufficient funds! You are "+e.getAmount()+" short of money.");
//			e.printStackTrace();
		}
	}
}


