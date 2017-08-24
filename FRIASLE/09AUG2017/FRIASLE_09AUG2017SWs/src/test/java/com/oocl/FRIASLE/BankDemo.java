package com.oocl.FRIASLE;

import java.util.Scanner;

class InsufficientOfFundsException extends Throwable{
	double fundsNeeded;
	
	public InsufficientOfFundsException(double amount) {
		this.fundsNeeded=amount;
	}
}

class ReachMaxWithdraw extends Throwable{
	int max = 10000;
	
	public ReachMaxWithdraw() {
		
	}
}


class AccountChecking{
	
	public double withdrawMoney(double toWithdraw, double balance) throws InsufficientOfFundsException{
		if(balance >= toWithdraw) {
			balance -= toWithdraw;
		}else {
			System.out.println("Insufficient of funds. Need more " + (toWithdraw-balance) + " !!!");
			throw new InsufficientOfFundsException(toWithdraw-balance);
		}
		
		return balance;
	}
	
	public double depositMoney(double toDeposit, double balance){
		return balance += toDeposit;
	}
	
}



public class BankDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AccountChecking bank = new AccountChecking();
		Scanner scan = new Scanner(System.in);
		double withdraw;
		double balance = 10000;
		double remaining= 0 ;
		
		System.out.println("Amount to withdraw: ");
		withdraw = scan.nextInt();
		
		try {
			remaining = bank.withdrawMoney(withdraw,balance);
			System.out.println("Remaining balance: " + remaining);
		}catch(InsufficientOfFundsException e) {
			e.printStackTrace();
		}
		
		
	}

}
