package exercise1.test;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import exercise1.StringHelper;

@RunWith(Parameterized.class)
public class StringHelperTest {
	StringHelper helper;
//	
//	@Before
//	public void setUp() throws Exception {
//		helper = new StringHelper();
//	}
//
//	@After
//	public void tearDown() throws Exception {
//	}
//
//	@Test
//	public void testTruncateAInFirst2Positions() {
//		//fail("Not yet implemented");
//		assertEquals("CD",helper.truncateAInFirst2Positions("AACD"));
//	}
//
//	@Test
//	public void testAreFirstAndLastTwoCharactersTheSame() {
//		//fail("Not yet implemented");
//	}
//	
//	@Test(expected = NullPointerException.class)
//	public void testArraySort_NullArray(){
//		int[] numbers = null;
//		Arrays.sort(numbers);
//	}
//	
//	@Test(timeout = 50)
//	public void testPerformance(){
//		for(int i=0;i<1000000;i++){
//			Arrays.sort(new int[] {i, i-1, i+1});
//		}
//	}
//	
	private String input;
	private String expectedOutput;
	@Parameters
	public static Collection<String[]> testConditions(){
		String expectedOutputs[][]={{"AACD","CD"},{"ACD","CD"}};
		return Arrays.asList(expectedOutputs);
	}
	
	public void StringHelperParameterizedTest(String input, String expectedOutput){
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	@Test
	public void testTruncateAinFirst2Positions(){
		assertEquals(expectedOutput, helper.truncateAInFirst2Positions(input));
	}

}
