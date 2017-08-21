package exercise1.test;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runners.Parameterized.Parameters;

import exercise1.Adder;

public class ParameterizedAdderTest {
	Adder a;
	@Before
	public void setUp() throws Exception {
		a = new Adder();
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testAdd() {
		fail("Not yet implemented");
	}
	
	private String input;
	private String expectedOutput;
	@Parameters
	public static List<double[]> testConditions(){
		double expectedOutputs[][]={{1.0,1.0},{2.0,2.0}};
		return Arrays.asList(expectedOutputs);
	}
	
	public void ParameterizedTest(String input, String expectedOutput){
		this.input = input;
		this.expectedOutput = expectedOutput;
	}
	@Test
	public void testTruncateAinFirst2Positions(){
		//assertEquals(expectedOutput, a.add(x, y));
	}


}
