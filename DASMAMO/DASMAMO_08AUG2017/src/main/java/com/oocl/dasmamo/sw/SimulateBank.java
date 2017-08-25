package com.oocl.dasmamo.sw;

import java.util.Scanner;

public class SimulateBank {


	public static void main(String[] args) throws InsufficientBalanceException{
		
		// TODO Auto-generated method stub
		BankAccount b = new BankAccount();
		
		while(true) {
			System.out.println("====== Choose ===== ");	
			System.out.println("1] Deposit");
			System.out.println("2] Withdraw");
			System.out.println("3] Check Balance");
			Scanner s = new Scanner(System.in);
			int option = s.nextInt();
			switch(option) {
			case 1: 
				System.out.println("Deposit: ");
				Scanner scan = new Scanner(System.in);
				int dep = scan.nextInt();
				b.deposit(dep);
				break;
			case 2: 
				System.out.println("Withdraw: ");
				Scanner scan2 = new Scanner(System.in);
				int withdrawAmt = scan2.nextInt();
			//	System.out.print(b.balance);
				if(withdrawAmt<=b.balance) {
					b.withdraw(withdrawAmt);
				}
				else {
					throw new InsufficientBalanceException(b.balance);
				}
				break;
			case 3: 
				b.getBalance();
				break;
			}
			
		}
		
	}

}
