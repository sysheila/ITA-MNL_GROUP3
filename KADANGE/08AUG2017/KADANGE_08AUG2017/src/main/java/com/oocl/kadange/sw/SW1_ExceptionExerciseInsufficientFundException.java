package com.oocl.kadange.sw;

public class SW1_ExceptionExerciseInsufficientFundException{
	private int balance;
	
	public SW1_ExceptionExerciseInsufficientFundException(){
		
	}

	public SW1_ExceptionExerciseInsufficientFundException(int need) throws Throwable{
		this.balance = need;
		remainingFund();
	}
	
	public Throwable remainingFund(){
		return new Exception("Savings need more and additional of "+this.balance);
	}
}
