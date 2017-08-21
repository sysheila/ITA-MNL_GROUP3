package com.oocl.kadange.hw;

import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;
import java.util.concurrent.TimeUnit;

public class HW6_DeadlockCheck {
	static Boolean lock1 = true;
	static Boolean lock2 = false;
	
	private static class T1 extends Thread{
		public void run() {
			synchronized (lock1) {
				System.out.println("Thread 1: Holding lock 1...");
				try{
					Thread.sleep(10);
				}catch(InterruptedException e){
				}
				System.out.println("Thread 1: Waiting for lock 2...");
				
				synchronized (lock2) {
					System.out.println("Thread 1: Holding lock 1 & 2...");
				}
			}
		}
	}
	
	private static class T2 extends Thread {
		public void run() {
			synchronized (lock2) {
				interrupt();
				System.out.println("Thread 2: Holding lock 2...");
				try{
					Thread.sleep(10);
				}catch(InterruptedException e){
				}
				System.out.println("Thread 2: Waiting for lock 1...");

				synchronized (lock1) {
					System.out.println("Thread 2: Holding lock 1 & 2...");
				}
			}
		}
	}

	public static void main(String[] args) {
		new Thread(new T1()).start();
		new Thread(new T2()).start();
		
		try {
			TimeUnit.SECONDS.sleep(2);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		detectDeadlock();
	}
	
	public static void detectDeadlock() {
		ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
	    long[] threadIds = threadBean.findMonitorDeadlockedThreads();
	    int deadlockedThreads = threadIds != null? threadIds.length : 0;
	    System.out.println("Number of deadlocked threads: " + deadlockedThreads);
	}

}
