package calcws;

import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.sql.Timestamp;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class Logging {
	static HttpServletRequest request;
	InetAddress thisIp;
	File logDir = new File("D:\\WSlogs");
	File logsTxt = new File("D:\\WSlogs\\logs.txt");
	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	CalcMain cm = new CalcMain();
	   /** 
     * This is the method which I would like to execute
     * before a selected method execution.
  */
	@Pointcut("execution(* calcws.*.*(..))")
	 private void selectAll(){}
	
	@Before("selectAll()")
  public void beforeAdvice(){
     System.out.println("going to run Calculator");
  }
  
  /** 
     * This is the method which I would like to execute
     * after a selected method execution.
 * @throws IOException 
  */

	   @After("selectAll()")
  public void afterAdvice() throws IOException{
		   //method 2 - via Date
     Date date = new Date();
     System.out.println(new Timestamp(date.getTime()));
     System.out.println("See logs at D:\\WSLogs");
  }

  /** 
     * This is the method which I would like to execute
     * when any method returns.
 * @throws IOException 
  */
	   @AfterReturning(pointcut = "selectAll()", returning = "retVal")
  public void afterReturningAdvice(Object retVal) throws IOException {
     System.out.println("Returning:" + retVal.toString() );
     Date date = new Date();
		String text = thisIp.getLocalHost().toString() + "used " + this.toString() + date.toString() + System.lineSeparator();
		if (!logDir.exists()) {
			logDir.mkdir();
			logsTxt.createNewFile();
			Files.write(Paths.get(logsTxt.getAbsolutePath()), text.getBytes(), StandardOpenOption.APPEND);
		} else {
			if (!logsTxt.exists()) {
				logsTxt.createNewFile();
				Files.write(Paths.get(logsTxt.getAbsolutePath()), text.getBytes(), StandardOpenOption.APPEND);
			} else {
				Files.write(Paths.get(logsTxt.getAbsolutePath()), text.getBytes(), StandardOpenOption.APPEND);
			}
		}
  }
	   

  /**
     * This is the method which I would like to execute
     * if there is an exception raised.
  */
@AfterThrowing(pointcut = "selectAll()", throwing = "ex")
  public void AfterThrowingAdvice(IllegalArgumentException ex){
     System.out.println("There has been an exception: " + ex.toString());   

}


}
