package com.oocl.dasmamo.sw;

import static org.junit.Assert.*;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;

public class StringHelperTest extends StringHelper {

	StringHelper helper;
	
		@Before
			public void testBefore(){
				System.out.println("=============================");
				System.out.println("Before Test");
				System.out.println("=============================");
			} 

	@Test
	public void testTestTruncateAInFirst2Positions() {
		assertEquals("CD",helper.truncateAInFirst2Positions("AACD"));
	//	fail("Not yet implemented");
	}

	@Test
	public void testTestAreFirstAndLastTwoCharactersTheSame() {
	//	fail("Not yet implemented");
	}
	
	@Test
	public void testArray_Sort_RandomArray() {
		int[] numbers = {12,3,4,1};
		int[] expected = {1,3,4,12};
		Arrays.sort(numbers);
		assertArrayEquals(expected,numbers);
	}
	
	/*@Test(expected = NullPointerException.class)
	public void testArraySort_NullArray() {
		int[] numbers = null;
		//int[] expected = Arrays.sort(numbers);
		Arrays.sort(numbers);
	//	assertEquals(expected,numbers);
	}*/
	
	/*@Test(timeout = 20 )
	public void testPerformance() {
		for(int i=0; i<1000000; i++) {
			Arrays.sort(new int[] {i,i-1, i+1});
		}
	}*/

}
