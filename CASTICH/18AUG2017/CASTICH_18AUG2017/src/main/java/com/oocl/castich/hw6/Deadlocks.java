package com.oocl.castich.hw6;

import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;

public class Deadlocks {

	public static void main(String[] args) {
		simulateDeadlock();
	    ThreadMXBean bean = ManagementFactory.getThreadMXBean();
	    long[] threads = bean.findMonitorDeadlockedThreads();
	    int deadlockedThreads = threads != null? threads.length : 0;
	    System.out.println("Deadlocked Threads: " + deadlockedThreads);
	}
	
	private static void simulateDeadlock() {
	    final Object lock1 = new Object();
	    final Object lock2 = new Object();
	    Thread thread1 = new Thread(new Runnable() {
	        public void run() {
	            synchronized (lock1) {
	                System.out.println("Thread-1 has acquired Lock-1");
	                try {
	                	Thread.sleep(100);
	                } catch (InterruptedException ignore) {}
	                synchronized (lock2) {
	                    System.out.println("Thread-1 has acquired Lock-2");
	                }
	            }
	        }
	 
	    });
	    thread1.start();
	 
	    Thread thread2 = new Thread(new Runnable() {
	        public void run() {
	            synchronized (lock2) {
	                System.out.println("Thread-2 acquired Lock-2");
	                try {
	                	Thread.sleep(100);
	                } catch (InterruptedException ignore) {}
	                synchronized (lock1) {
	                    System.out.println("Thread-2 acquired Lock-1");
	                }
	            }
	        }
	    });
	    thread2.start();
	 
	    try {
        	Thread.sleep(100);
	    } catch (InterruptedException ignore) {}
	}

}
