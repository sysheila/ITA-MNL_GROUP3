package com.oocl.berinju.sw2;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Date;

public class Logger {

		   /** 
		      * This is the method which I would like to execute
		      * before a selected method execution.
		   */
		   public void beforeAdvice(){
		      System.out.println("Going to setup Calculator Web Service");
		   }
		   
		   /** 
		      * This is the method which I would like to execute
		      * after a selected method execution.
		   */
		   public void afterAdvice(){
		      System.out.println("Calculator Web Service has been setup.");
		   }

		   /** 
		      * This is the method which I would like to execute
		      * when any method returns.
		   */
		   public void afterReturningAdvice(Object retVal) {
		      System.out.println("Returning:" + retVal.toString() );
		      InetAddress ip;
			   
			  try {
				ip = InetAddress.getLocalHost();
				Date date = new Date();
				System.out.println(ip + date.toGMTString());
			  } catch (UnknownHostException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}  
			 
		   }

		   /**
		      * This is the method which I would like to execute
		      * if there is an exception raised.
		   */
		   public void AfterThrowingAdvice(IllegalArgumentException ex){
		      System.out.println("There has been an exception: " + ex.toString());   
		   }
	
}
