package com.oocl.dasmamo.sw;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(Parameterized.class)
public class StringHelperParameterizedTest {

	StringHelper helper = new StringHelper();
	
	private String input;
	private String expectedOutput;
	
	
	public StringHelperParameterizedTest(String input, String expectedOutput) {
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	@Parameters
	public static Collection<String[]> testConditions() {
		String expectedOutputs[][] = {{"AACD", "CD"}, {"ACD","CD"}};
		return Arrays.asList(expectedOutputs);
	} 

	@Test
	public void testTestTruncateAInFirst2Positions() {
		assertEquals("CD",helper.truncateAInFirst2Positions("AACD"));
	//	fail("Not yet implemented");
	}
	public StringHelperParameterizedTest(String expectedOutput) {
		super();
		this.expectedOutput = expectedOutput;
	}
}
