package com.oocl.FRIASLE;

import javax.naming.InsufficientResourcesException;

public class CheckingAccount {

	double balance;

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public void deposit(double num) {
		try {
			if (num > 10000.0) {
				throw new ExceededAmountException("Deposit limit is 10k");
			} else {
				balance += num;
			}

		} catch (ExceededAmountException e) {

			e.printStackTrace();
		}

	}

	public void withdraw(double num) {
		balance -= num;

		try {
			if (balance < 0) {
				balance += num;
				throw new InsufficientFundsException(
						"Withdrawing this amount would result in a deficit in your account");
			}

		} catch (InsufficientFundsException e) {
			e.printStackTrace();
		}
	}

	class ExceededAmountException extends Throwable {
		ExceededAmountException(String message) {
			super(message);
		}
	}
}
