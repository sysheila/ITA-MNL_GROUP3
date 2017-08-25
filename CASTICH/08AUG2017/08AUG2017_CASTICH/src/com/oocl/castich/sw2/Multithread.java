package com.oocl.castich.sw2;

class Runner extends Thread{

	@Override
	public void run() {
		for(int i=0; i<=10; i++) {
			System.out.println("Hello " + i);
//			try {
//				Thread.sleep(100);
//			}
//			catch(InterruptedException e) {
//				e.printStackTrace();
//			}
		}
		
	}

}

public class Multithread {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Runner run1 = new Runner();
//		run1.setPriority(Thread.MAX_PRIORITY);
//		run1.start();
//		Runner run2 = new Runner();
//		run1.setPriority(Thread.MIN_PRIORITY);
//		run2.start();
		
//		RunnableDemo run = new RunnableDemo("Thread-1");
//		run.start();
//		RunnableDemo run2 = new RunnableDemo("Thread-2");
//		run2.start();
//		RunnableDemo run3 = new RunnableDemo("Thread-3");
//		run3.start();
//		RunnableDemo run4 = new RunnableDemo("Thread-4");
//		run4.start();
		
		Chat m = new Chat();
		Chat1 chat1 = new Chat1(m);
		Chat2 chat2 = new Chat2(m);
		
	}
}
