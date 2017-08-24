package main.java.com.oocl.berinju.sw1;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;


public class ATMTest {
	ATM atm;
	Person person;
	@Before
	public void setUp() throws Exception {
		atm = new ATM();
		person = new Person();
		atm.setBalance(1000);
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetBalance() {
		assertEquals(1000.0, atm.getBalance(),0);
	}

	@Test
	public void testSetBalance() {
		atm.setBalance(1000.0);
		assertEquals(1000.0, atm.getBalance(),0);
	}

	@Test
	public void testDeposit() {
		atm.deposit(person);
	}

	@Test
	public void testWithdraw() {
		try {
			atm.withdraw(person);
		} catch (InsufficientFundsException e) {
			// TODO Auto-generated catch block
			fail();
			e.printStackTrace();
		}
	}

}
