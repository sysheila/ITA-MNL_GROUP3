package calcws;

import java.io.IOException;
import java.net.InetAddress;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.FileHandler;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class Logging {
	InetAddress thisIp;
	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
	
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
     System.out.println("Results have been posted");
     System.out.println( thisIp.getLocalHost());
     //method 2 - via Date
     Date date = new Date();
     System.out.println(new Timestamp(date.getTime()));
/*
     //logfile
     Logger logger = Logger.getLogger("MyLog");  
     FileHandler fh;  

     try {  

         // This block configure the logger with handler and formatter  
         fh = new FileHandler("MyLogFile.log");  
         logger.addHandler(fh);
         SimpleFormatter formatter = new SimpleFormatter();  
         fh.setFormatter(formatter);  

         // the following statement is used to log any messages  
         logger.info(thisIp.getHostName() + " " + thisIp.getLocalHost() + this);  

     } catch (SecurityException e) {  
         e.printStackTrace();  
     } catch (IOException e) {  
         e.printStackTrace();  
     }  */

  }

  /** 
     * This is the method which I would like to execute
     * when any method returns.
  */
	   @AfterReturning(pointcut = "selectAll()", returning = "retVal")
  public void afterReturningAdvice(Object retVal) {
     System.out.println("Returning:" + retVal.toString() );
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
