package com.oocl.kadange.sw;

public class SW1_ExceptionExerciseInsufficientFundException extends Throwable{
	private int balance;
	
	public SW1_ExceptionExerciseInsufficientFundException(){
		
	}

	public SW1_ExceptionExerciseInsufficientFundException(int need) throws Throwable{
		// TODO Auto-generated constructor stub
		this.balance = need;
		remainingFund();
	}
	
	public Throwable remainingFund(){
		return new Exception("Savings need more and additional of "+this.balance);
	}
}
