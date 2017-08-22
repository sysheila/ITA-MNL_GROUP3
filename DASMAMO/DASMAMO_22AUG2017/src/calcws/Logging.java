package calcws;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class Logging {
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
  */

	   @After("selectAll()")
  public void afterAdvice(){
     System.out.println("Results have been posted");
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
