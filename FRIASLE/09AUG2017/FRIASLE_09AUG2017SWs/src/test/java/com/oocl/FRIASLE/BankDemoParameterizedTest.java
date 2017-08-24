package com.oocl.FRIASLE;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Test;

import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(Parameterized.class)
public class BankDemoParameterizedTest {

	AccountChecking bank = new AccountChecking();

	public Double toWithdraw;
	public Double balance;

	@Parameters
	public static Collection<Object[]> testCondition() {

		Object expectedOutput[][] = { { 10000.0, 50000.0, 40000.0 }, { 100000.0, 1000000.0, 900000.0 },
				{ 1000.0, 500.0, new InsufficientOfFundsException(500.0) } };
		return Arrays.asList(expectedOutput);
	}

	@Parameterized.Parameter(0)
	public double withdraw;
	@Parameterized.Parameter(1)
	public double bal;
	@Parameterized.Parameter(2)
	public double rem;

	@Test
	public void withdrawMoneyTest() throws InsufficientOfFundsException {
		double remaining;
		remaining = bank.withdrawMoney(withdraw, bal);
		assertEquals(remaining, rem, 0);
	}
}
