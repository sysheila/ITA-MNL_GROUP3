package com.oocl.castich.sw2;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(Parameterized.class)
public class Exercise4ParameterizedTest extends Exercise4 {
	
	Account account;
	
	public static Double input;
	public static Double expectedOutput;
	
	@Before
	public void setup() {
		account = new Account(25000);
	}
	
	public Exercise4ParameterizedTest(double input, double expectedOutput) {
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	
	@Parameters
	public static Collection<Double[]> testConditions(){
		Double[][] expectedOutputs = {{5000.0,20000.0},{15000.0, 10000.0}};
		return Arrays.asList(expectedOutputs);
	}
	
	@Test
	public void withdrawTest() throws InsufficientFundsException {
		assertEquals(expectedOutput, account.withdraw(input), 0);
	}

}
