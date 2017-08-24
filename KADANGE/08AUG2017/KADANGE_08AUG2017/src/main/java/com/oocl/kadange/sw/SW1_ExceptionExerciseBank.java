package com.oocl.kadange.sw;

import java.util.Scanner;

public class SW1_ExceptionExerciseBank{
	
	private int savings=0;	
	Scanner sc = new Scanner(System.in);
	
	/*=====================================================*/
	/*Start program*/
	/*=====================================================*/
	public SW1_ExceptionExerciseBank(){
		getOptions();
	}
	
	public void getOptions(){
		System.out.println("====== Select an option: ======");
		System.out.println("Select 1 to Deposit");
		System.out.println("Select 2 to Withdraw");
		System.out.println("Select 3 to Check Balance");
		System.out.println("Select 4 to Exit");
		System.out.println("===============================");
		doAction();
	}
	
	public void doAction(){
		int action=0;
		if(sc==null){
			sc = new Scanner(System.in);
		}
		System.out.print("Enter an option: ");
		if(sc.hasNextInt()){
			action=sc.nextInt();
			if(action==1){
				doDeposit();
			}else if(action==2){
				doWithdraw();
			}else if(action==3){
				doCheckBalance();
			}else if(action==4){
				System.out.println("Exiting...");
			}
		}else{
			System.out.println("Invalid input. Must enter an amount");
			getOptions();
		}
	}
	
	/*=====================================================*/
	/*Do a deposit*/
	/*=====================================================*/
	//uncomment deposit()
	private void doDeposit() {
		int deposit=0;
		if(sc==null){
			sc = new Scanner(System.in);
		}
		
		System.out.print("Enter amount to deposit: ");
		
		if(sc.hasNextInt()){
			deposit = sc.nextInt();
			if(deposit > 0){
				deposit(deposit);
			}else{
				System.out.println("Invalid amount!!!");
				getOptions();
			}
		}else{
			System.out.println("Amount entered not valid!");
			getOptions();
		}
	}

	public void deposit(int deposit){
		this.savings += deposit;
		getOptions();
	}
	
	/*=====================================================*/
	/*Do a withdrawal*/
	/*=====================================================*/
	
	//uncomment try...catch block for working program
	private void doWithdraw() {
		int withdraw=0;
		if(sc==null){
			sc = new Scanner(System.in);
		}
		
		System.out.print("Enter amount to withdraw: ");
		
		if(sc.hasNextInt()){
			withdraw = sc.nextInt();
			if(withdraw > 0){
				withdraw(withdraw);
			}else{
				System.out.println("Invalid amount!!!");
				getOptions();
			}
		}else{
			System.out.println("Amount entered not valid!");
			getOptions();
		}
	}
	
	//Comment for test
	//Uncomment for running program
	public void withdraw(int withdraw){
		int need = 0;
		if(withdraw <= this.savings){
			this.savings -= withdraw;
		}else{
			need = withdraw-this.savings;
			try {
				throw new SW1_ExceptionExerciseInsufficientFundException(need).remainingFund();
			}catch (Throwable e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		getOptions();
	}
	
	/*=====================================================*/
	/*Check account balance*/
	/*=====================================================*/
	
	private void doCheckBalance(){
		checkBalance();
		getOptions();
	}
	
	private void checkBalance(){
		System.out.println("Current account balance is "+this.savings);
	}
	
	public int checkAccBalance(){
		return this.savings;
	}

}
