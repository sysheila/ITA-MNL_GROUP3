package com.oocl.dasmamo.sw;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Parameterized.class)
public class SW1_BankAccountParameterized {
	BankAccount bankAccount = new BankAccount();
	private Integer input;
	private Integer expectedOutput;
	
	public SW1_BankAccountParameterized(Integer input, Integer expectedOutput) {
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	@Parameters
	public static Collection<Integer[]> testConditions() {
		Integer expectedOutputs[][] = {{200,200}, {980,980}};
		return Arrays.asList(expectedOutputs);
	} 
	
	/*public BankAccountParameterizedTest(int expectedOutput) {
		super();
		this.expectedOutput = expectedOutput;
	}
	*/
	@Test
	public void testBank(){
		assertEquals(expectedOutput, bankAccount.deposit(input),0);
	}
	
}

