package com.oocl.castich.sw;

import static org.junit.Assert.*;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;

public class StringHelperTest {

	StringHelper helper;
	
	@Before
	public void before() {
		helper = new StringHelper();
	}
	
	@Test
	public void testTruncateAInFirst2Positions() {
		assertEquals("CD", helper.truncateAInFirst2Positions("AACD"));
	}

	@Test
	public void testAreFirstAndLastTwoCharactersTheSame() {
//		fail("Not yet implemented");
	}
	
	@Test(timeout = 200)
	public void tesPerformance() {
		for(int i = 0; i<1000000; i++) {
			Arrays.sort(new int[] {i, i - 1, i + 1});
		}
	}

}
