package com.oocl.dasmamo.hw;

import java.lang.management.ManagementFactory;
import java.lang.management.ThreadMXBean;
import java.util.concurrent.TimeUnit;

public class HW6_DeadlockDetector {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
			test1();
			detectDeadLock();
	}

	private static void test1() {
		final Object lock1 = new Object();
		final Object lock2 = new Object();
		
		Thread thread1 = new Thread(new Runnable() {
			@Override public void run() {
				synchronized(lock1) {
					System.out.println("Thread1 acquired lock1");
					try {
						TimeUnit.MILLISECONDS.sleep(50);
					}catch(InterruptedException ignore) {
						
					}
					synchronized (lock2) {
						System.out.println("Thread1 acquired lock2");
					}
				}
			}
		});
		thread1.start();
		
		Thread thread2 = new Thread(new Runnable() {
			@Override public void run() {
				synchronized(lock2) {
					System.out.println("Thread2 acquired lock2");
					try {
						TimeUnit.MILLISECONDS.sleep(50);
					}catch(InterruptedException ignore) {
						
					}
					synchronized (lock1) {
						System.out.println("Thread2 acquired lock1");
					}
				}
			}
		});
		thread2.start();
		try {
			TimeUnit.MILLISECONDS.sleep(100);
			//detectDeadLock();
		}catch(InterruptedException r) {}
	}
	
	private static void detectDeadLock() {
		ThreadMXBean threadBean = ManagementFactory.getThreadMXBean();
		long[] threadIds = threadBean.findMonitorDeadlockedThreads();
		int deadlock = threadIds != null?threadIds.length : 0;
		System.out.println("Number of deadlock: " + deadlock);
	}
}
