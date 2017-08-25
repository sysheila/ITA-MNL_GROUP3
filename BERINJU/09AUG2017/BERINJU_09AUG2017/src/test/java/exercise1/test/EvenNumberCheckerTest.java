package exercise1.test;

import java.util.Arrays;
import java.util.Collection;
 

import org.junit.Test;
import org.junit.Before;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.junit.runner.RunWith;

import exercise1.EvenNumberChecker;
import static org.junit.Assert.assertEquals;

@RunWith(Parameterized.class)
public class EvenNumberCheckerTest {
   private Integer inputNumber;
   private Boolean expectedResult;
   private EvenNumberChecker evenNumberChecker;

   @Before
   public void setUp() {
	   evenNumberChecker = new EvenNumberChecker();
   }
	
   public EvenNumberCheckerTest(Integer inputNumber, Boolean expectedResult) {
      this.inputNumber = inputNumber;
      this.expectedResult = expectedResult;
   }

   @Parameterized.Parameters
   public static Collection evenNumbers() {
      return Arrays.asList(new Object[][] {
         { 2, true },
         { 6, true },
         { 19, false },
         { 22, true },
         { 23, false }
      });
   }

   @Test
   public void testEvenNumberChecker() {
      System.out.println("Parameterized Input is : " + inputNumber);
      assertEquals(expectedResult, evenNumberChecker.validate(inputNumber));
   }
}