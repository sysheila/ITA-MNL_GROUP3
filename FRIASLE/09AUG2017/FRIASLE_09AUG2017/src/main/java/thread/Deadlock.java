package thread;

public class Deadlock {
	
	static Boolean Lock1 = true;
	static Boolean Lock2 = false;
	
	public static void main(String[] args) {
		ThreadDemo1 t1 = new ThreadDemo1();
		ThreadDemo2 t2 = new ThreadDemo2();
		t1.start();
		t2.start();
	}
	
	private static class ThreadDemo1 extends Thread{
		public void run() {
			synchronized(Lock1) {
				System.out.println("Thread 1: Holding lock 1...");
			}
			
			try {
				Thread.sleep(10);
			}catch(InterruptedException e) {
			}
			System.out.println("Thread 1: Waiting for lock2...");
			synchronized (Lock2) {
				System.out.println("Thread 1: Holding lock 1 & 2");
			}
		}
	}
	
	private static class ThreadDemo2 extends Thread {
		public void run() {
			synchronized(Lock1) {
				System.out.println("Thread 2: Holding lock 1...");
			}
			
			try {
				Thread.sleep(10);
			}catch(InterruptedException e) {
			}
			System.out.println("Thread 2: Waiting for lock1...");
			synchronized (Lock2) {
				System.out.println("Thread 2: Holding lock 1 & 2");
			}
		}
	}

}
