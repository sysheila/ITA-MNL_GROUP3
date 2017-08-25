
import static org.junit.Assert.*;

import org.junit.Test;

import com.calculator.Exam;

public class TestExam {

	@SuppressWarnings("deprecation")
	@Test
	public void test() {
		/* NUMBER 1 */
		assertEquals("one",Exam.number1());
		
		/* NUMBER 2 */
		assertEquals(8,Exam.number2(5));
		assertEquals(34,Exam.number2(8));
		assertNotNull(Exam.number2(5));
		assertNotSame(32,Exam.number2(7));
		assertNotEquals(32,Exam.number2(7));
		
		/* NUMBER 3 */
		assertEquals(26,Exam.number3(2, 2));
		assertNotEquals(27,Exam.number3(2, 2));
		
		/* NUMBER 4 */
		assertEquals(4, Exam.number4(2, 10));
		assertNotEquals(24, Exam.number4(14, 2));
		
		/* NUMBER 7 */
		assertEquals(5, Exam.number7(60));
		assertNotEquals(51, Exam.number7(67));
		
		/* NUMBER 10 A */
		assertEquals(10, Exam.number10A());
		assertNotEquals(51, Exam.number10A());
		
		/* NUMBER 10 B */
		assertEquals(80, Exam.number10B());
		assertNotEquals(51, Exam.number10B());
		
		/* NUMBER 10 C */
		assertEquals(0, Exam.number10C());
		assertNotEquals(51, Exam.number10C());
		
		/* NUMBER 10 D */
		assertEquals(false, Exam.number10D());
		assertNotEquals(51, Exam.number10D());
		
		/* NUMBER 10 E */
		assertEquals("cartcartoon", Exam.number10E());
		assertNotEquals("carton", Exam.number10E());
		
		
	}

}
