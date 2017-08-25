package com.oocl.kadange.sw.test;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.Collection;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import com.oocl.kadange.sw.*;

@RunWith(Parameterized.class)
public class SubtractTest {
	SW2_Subtracter sub = new SW2_Subtracter();
	private Integer input1, input2; 
	private Integer expectedOutput;
	
	public SubtractTest(Integer input1, Integer input2, Integer expectedOutput){
		this.input1 = input1;
		this.input2 = input2;
		this.expectedOutput = expectedOutput;
	}
	
	@Parameters
	public static Collection<Integer[]> testConditions(){
		Integer expectedOutputs[][] = { {2,1,1},{3,1,2} };
		return Arrays.asList(expectedOutputs);
	}
	
	@Test
	public void testSubtract(){		
		assertEquals(expectedOutput, sub.subtract((double)input1, (double)input2), 0);
	}

}
