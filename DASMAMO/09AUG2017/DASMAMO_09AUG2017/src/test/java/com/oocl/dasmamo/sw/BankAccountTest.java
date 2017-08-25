package JavaTraining.JAVA_TRAINING;

import static org.junit.Assert.*;

import org.junit.Test;

public class BankAccountTest  {

	BankAccount bankAccount = new BankAccount();
/*	private String input;
	private String expectedOutput;
	*/
	@Test
	public void testBankAccount() {
		//fail("Not yet implemented");
		bankAccount.balance = 100;
		assertEquals(100, bankAccount.getBalance());
	}

	@Test
	public void testDeposit() {
		bankAccount.deposit(25);
		assertEquals(25,bankAccount.getBalance());

	//	fail("Not yet implemented");
	}

	@Test
	public void testWithdraw() {
		bankAccount.balance = 100;
		assertEquals(75,bankAccount.withdraw(25));
	//	fail("Not yet implemented");
	}

	@Test
	public void testGetBalance() {
		bankAccount.balance = 100;
		assertEquals(100,bankAccount.getBalance());
	//	fail("Not yet implemented");
	}

}
