package com.oocl.daluplo.hw6;
import java.util.concurrent.TimeUnit;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DeadlockHandler handler = new DeadlockHandler();
		DeadlockChecker deadlockDetector = new DeadlockChecker(handler, 5, TimeUnit.SECONDS);
		deadlockDetector.start();

		final Object lock1 = new Object();
		final Object lock2 = new Object();

		Thread thread1 = new Thread(new Runnable() {
		  
		  public void run() {
		    synchronized (lock1) {
		      System.out.println("Thread1 acquired lock1");
		      try {
		        TimeUnit.MILLISECONDS.sleep(500);
		      } catch (InterruptedException ignore) {
		      }
		      synchronized (lock2) {
		        System.out.println("Thread1 acquired lock2");
		      }
		    }
		  }

		});
		thread1.start();

		Thread thread2 = new Thread(new Runnable() {

		  public void run() {
		    synchronized (lock2) {
		      System.out.println("Thread2 acquired lock2");
		      synchronized (lock1) {
		        System.out.println("Thread2 acquired lock1");
		      }
		    }
		  }
		});
		thread2.start();
	}

}
