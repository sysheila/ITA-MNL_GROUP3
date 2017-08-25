package com.oocl.FRIASLE;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class BankDemoTest {
	AccountChecking bank;
	@Test
	public void test() {
//		fail("Not yet implemented");
	}
	
	@Before
	public void withdrawMoneyTest1() throws InsufficientOfFundsException{
		bank = new AccountChecking();
		
	}
	
	@Test(expected = InsufficientOfFundsException.class)
	public void withdrawMoneyTest() throws InsufficientOfFundsException{
		double remaining;
		remaining = bank.withdrawMoney(1000,500);
	}
	

}
