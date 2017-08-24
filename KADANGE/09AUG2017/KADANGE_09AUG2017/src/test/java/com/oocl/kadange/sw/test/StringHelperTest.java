package com.oocl.kadange.sw.test;

import static org.junit.Assert.*;
import java.util.Arrays;
import java.util.Collection;
import org.junit.*;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import com.oocl.kadange.sw.*;

@RunWith(Parameterized.class)
public class StringHelperTest {
	SW2_StringHelper helper = new SW2_StringHelper();
	private String input; 
	private String expectedOutput;
	
	/*@Before
	public void testBefore(){
		helper = new StringHelper();
		System.out.println("=============================");
		System.out.println("Before Test");
		System.out.println("=============================");
	}*/
	
	/*===========================================*/
	/*Parameterized test sample*/
	/*===========================================*/
	public StringHelperTest(String input, String expectedOutput){
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	
	@Parameters
	public static Collection<String[]> testConditions(){
		String expectedOutputs[][] = {{"AACD","CD"},{"ACD","CD"}};
		return Arrays.asList(expectedOutputs);
	}
	
	@Test
	public void testTruncateAInFirst2Positions(){
		assertEquals(expectedOutput, helper.truncateAInFirst2Positions(input));
	}
	
	/*===========================================*/
/*
	@Test
	public void testTruncateAInFirst2Positions_firstTruncate() {
		assertEquals("CD", helper.truncateAInFirst2Positions("AACD"));
		System.out.println("testTruncateAInFirst2Positions");
	}

	@Test
	public void testAreFirstAndLastTwoCharactersTheSame() {
		System.out.println("testAreFirstAndLastTwoCharactersTheSame");
	}
	
	@Test
	public void testArraySort_RandomArray(){
		int[] numbers = {12,3,4,1};
		int[] expected = {1,3,4,12};
		Arrays.sort(numbers);
		assertArrayEquals(expected, numbers);
		System.out.println("Test1");
	}
	
	@Test(expected = NullPointerException.class)
	public void testArraySort_NullArray(){
		int[] numbers = null;
		Arrays.sort(numbers);
		System.out.println("Test2");
	}*/
	
	/*===========================================*/
	/*Performance test sample*/
	/*===========================================*/
	/*@Test(timeout = 30)
	public void testPerformance(){
		for(int i=0;i<1000000;i++){
			Arrays.sort(new int[]{i, i-1, i+1});
		}
	}
	
	@After
	public void testAfter(){
		System.out.println("=============================");
		System.out.println("After test");
		System.out.println("=============================");
	}*/

}
