package com.oocl.kadange.sw.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;
import org.junit.Test;
import com.oocl.kadange.sw.*;

public class ExceptionExerciseBankTest {
	SW1_ExceptionExerciseBank bank = new SW1_ExceptionExerciseBank(); 
	int val=0;

	@Test
	public void testDeposit_enterAnyAmount() {
		val = (int)(Math.random()*1000);
		bank.deposit(val);
		assertEquals(bank.checkAccBalance(), val);
	}
	
	@Test
	public void testDeposit_enterLargeAmount(){
		int amount = 0;
		for(int i=0;i<3;i++){
			amount += (int)(Math.random()*1000);
		}
		bank.deposit(amount);
		assertEquals((val+amount), bank.checkAccBalance());
		val += amount;
	}
	
	@Test
	public void testWithdraw_withdrawAnyAmount(){
		int curr = bank.checkAccBalance();
		int anyVal = (int)(Math.random()*val);
		try {
			bank.withdraw(anyVal);
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		assertEquals((curr-anyVal), bank.checkAccBalance());
	}
	
	@Test
	public void testWithdraw_overWithdraw(){
		int curr = bank.checkAccBalance();
		try {
			bank.withdraw(curr+100);
			fail("Exception not caught");
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
