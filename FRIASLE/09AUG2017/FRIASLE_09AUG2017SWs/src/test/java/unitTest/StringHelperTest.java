package unitTest;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

import unitTest.StringHelper;

public class StringHelperTest extends StringHelper {
	StringHelper helper;

	@Before // runs everytime before class
	public void before() {
		helper = new StringHelper();
	}
	// @After //runs everytime before class
	// public void after() {
	// helper = new StringHelper();
	// }
	//
	// @BeforeClass //runs once before class
	// public void beforeClass() {
	// helper = new StringHelper();
	// }
	//
	// @AfterClass //runs once before class
	// public void AfterClass() {
	// helper = new StringHelper();
	// }

	// @Test(timeout = 30)
	// public void testPerformance() {
	// for(int i = 0; i < 1000000; i++) {
	// Arrays.sort(new int[] {i, i-1, i+1});
	// }
	// }

	// @Test
	// public void testArraySort_RandomArray() {
	// int[] numbers = {12, 3, 4, 1};
	// int[] expected = {1, 3, 4, 12};
	// Arrays.sort(numbers);
	// assertArrayEquals(expected, numbers);
	// }
	//
	// @Test(expected = NullPointerException.class) //if error is expected test
	// would pass
	// public void NPE() {
	// int[] numbers=null;
	//
	// Arrays.sort(numbers);
	// }

	@Test
	public void testTruncateAInFirst2Positions() {
		String expected = "CD";
		String actual = helper.truncateAInFirst2Positions("AACD");
		assertEquals(expected, actual);
	}

	// @Test
	// public void testAreFirstAndLastTwoCharactersTheSame() {
	// fail("Not yet implemented");
	// }

}
