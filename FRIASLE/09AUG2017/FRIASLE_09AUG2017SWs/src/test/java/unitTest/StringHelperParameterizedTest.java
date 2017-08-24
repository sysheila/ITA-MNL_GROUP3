package unitTest;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

import unitTest.StringHelper;

@RunWith(Parameterized.class)
public class StringHelperParameterizedTest extends StringHelper {
	
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
	public void testTruncateAInFirst2Positions() {
		assertEquals(expectedOutput, truncateAInFirst2Positions(input));
	}

//	@Test
//	public void testAreFirstAndLastTwoCharactersTheSame() {
//		assertEquals(expectedOutput, areFirstAndLastTwoCharactersTheSame(input));
//	}

}
