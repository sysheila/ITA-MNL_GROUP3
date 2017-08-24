package main.java.com.oocl.berinju.sw1;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;


public class PersonTest {
	Person person1;
	ATM atm;
	@Before
	public void setUp() throws Exception {
		person1 = new Person();
		atm = new ATM();	
	}

	@After
	public void tearDown() throws Exception {
	}

	@Test()
	public void testGetMoney() {
		assertEquals("0", person1.getMoney());
	}

}
