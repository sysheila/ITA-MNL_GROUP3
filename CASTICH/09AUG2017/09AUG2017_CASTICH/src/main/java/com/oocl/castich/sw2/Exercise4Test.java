package com.oocl.castich.sw2;


import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class Exercise4Test {
	
	Account account = new Account(25000);
	
	@Before
	public void setup() {
		account = new Account(25000);
	}
	
	@Test(expected = InsufficientFundsException.class)
	public void withdrawTest() throws InsufficientFundsException {
		account.withdraw(50000);
	}
	
	@Test
	public void withdraw() {
		try {
			assertEquals(20000,account.withdraw(5000),0);
		} catch (InsufficientFundsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
