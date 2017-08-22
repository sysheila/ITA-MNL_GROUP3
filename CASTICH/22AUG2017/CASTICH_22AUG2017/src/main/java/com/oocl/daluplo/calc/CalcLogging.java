package com.oocl.daluplo.calc;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.net.InetAddress;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class CalcLogging {
   /** Following is the definition for a pointcut to select
      *  all the methods available. So advice will be called
      *  for all the methods.
   */
   @Pointcut("execution(* com.oocl.daluplo.calc.*.*(..))")
   private void selectAll(){}

   /** 
      * This is the method which I would like to execute
      * before a selected method execution.
   */
   @Before("selectAll()")
   public void beforeAdvice(){
      System.out.println("Going to setup calculator service...");
   }

   /** 
      * This is the method which I would like to execute
      * after a selected method execution.
   */
   @After("selectAll()")
   public void afterAdvice(){
      System.out.println("Calculator service has been setup.");
   }

   /** 
      * This is the method which I would like to execute
      * when any method returns.
   */
   @AfterReturning(pointcut = "selectAll()", returning = "retVal")
   public void afterReturningAdvice(Object retVal){String projectPath = System.getProperty("user.dir");
	   FileWriter writer;
	   DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	   Date date = new Date();
	   InetAddress ip;
	   
	   try {
		    ip = InetAddress.getLocalHost();
			writer = new FileWriter(projectPath+"\\src\\main\\resources\\input.txt", true);
			BufferedWriter buffer = new BufferedWriter(writer);
			
			buffer.write("\n"+dateFormat.format(date) + ": Accessed the calculator web service from host: "+ ip +"\n");
			buffer.newLine();
			buffer.close();
			writer.close(); 
			FileWriter fw = null;
			BufferedWriter bw = null;  
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
      System.out.println("Returning: " + retVal.toString() );
   }

   /**
      * This is the method which I would like to execute
      * if there is an exception raised by any method.
   */
   @AfterThrowing(pointcut = "selectAll()", throwing = "ex")
   public void AfterThrowingAdvice(IllegalArgumentException ex){
      System.out.println("There has been an exception: " + ex.toString());   
   }
}