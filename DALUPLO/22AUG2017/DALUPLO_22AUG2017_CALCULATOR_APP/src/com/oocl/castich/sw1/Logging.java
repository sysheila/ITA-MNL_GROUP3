package com.oocl.castich.sw1;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.annotation.Before;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;

@Aspect
public class Logging {
   /** Following is the definition for a pointcut to select
      *  all the methods available. So advice will be called
      *  for all the methods.
   */
	FileWriter fw = null;
	BufferedWriter bw = null; 
	
	
	
   @Pointcut("execution(* com.oocl.castich.sw1.CalculatorService.*(..))")
   private void selectAll(){}
   

   /** 
      * This is the method which I would like to execute
      * before a selected method execution.
   */
   @Before("selectAll()")
   public void beforeAdvice(){
      System.out.println("Going to setup Calculator");
      
   }

   /** 
      * This is the method which I would like to execute
      * after a selected method execution.
   */
   @After("selectAll()")
   public void afterAdvice(){
      System.out.println("Calculator has been setup.");
   }

   /** 
      * This is the method which I would like to execute
      * when any method returns.
   */
   @AfterReturning(pointcut = "selectAll()", returning = "retVal")
   public void afterReturningAdvice(Object retVal){
	   DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	   Date date = new Date();
	   
	   
      System.out.println("Calculator web service: " + retVal.toString() );
      try {
    	  fw = new FileWriter(".\\src\\com\\oocl\\castich\\sw1\\Calculator.txt", true);
    	  bw = new BufferedWriter(fw);
    	  bw.write(dateFormat.format(date) + ": Access calculator web service: " + retVal.toString() + "\n");
    	  bw.close();
    	  fw.close();
      }
      catch(Exception l) {
    	  l.printStackTrace();
      }
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