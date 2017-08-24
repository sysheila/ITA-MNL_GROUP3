package com.oocl.FRIASLE;

import java.util.Scanner;

public class Bank {
	
	public static void main(String[] args) {
		int choice = 0;
		CheckingAccount a = new CheckingAccount();
		
		

		while(choice != 4) {
			System.out.print("Input 1 for withdraw \n2 for deposit \n3 to get balance \n4 to exit");
			Scanner scan = new Scanner(System.in);
			choice = scan.nextInt();
			if(choice == 1) {
				System.out.print("Enter amount");
				 a.withdraw(scan.nextDouble());
			} else if(choice == 2) {
				System.out.print("Enter amount");
				 a.deposit(scan.nextDouble());
			}else if(choice == 3) {
				System.out.print("Balance is");
				 a.getBalance();
			}
			System.out.println(a.getBalance());
			
		}
	}

}
