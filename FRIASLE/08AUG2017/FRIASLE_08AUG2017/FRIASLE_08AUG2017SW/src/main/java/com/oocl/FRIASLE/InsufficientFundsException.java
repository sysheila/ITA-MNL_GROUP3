package com.oocl.FRIASLE;

public class InsufficientFundsException extends Throwable{
	InsufficientFundsException(String message) {
		super(message);
	}
	
	public void resultError() {
		System.out.print("InsufficientFundsException error caught");
	}

}

