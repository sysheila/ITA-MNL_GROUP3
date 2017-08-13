package AUG11WKENDJavaAssin;

import java.util.LinkedList;
import java.util.concurrent.Semaphore;

public class ConsumerSema {
	static Semaphore forProducer = new Semaphore(1, true);
	static Semaphore forConsumer = new Semaphore(0, true);
	static LinkedList list = new LinkedList();
	static Integer N = new Integer(0);

	public static void main(String[] args) throws InterruptedException {
		Producer one = new Producer("Levi");
		Producer two = new Producer("Jossel");
		Producer three = new Producer("Hos");
		Consumer cOne = new Consumer("Nat");
		Consumer cTwo = new Consumer("Jago");
		one.start();
		two.start();
		three.start();
		cOne.start();
//		cTwo.start();
	}

	static class Consumer extends Thread {
		String name;

		public Consumer(String name) {
			this.name = name;
		}

		public synchronized void run() {
			while (true) {
				try {
					forConsumer.acquire();
					list.removeFirst();
					System.out.println("Consumer " + name + " consumed "+ N +". list size is " + list.size());
					Thread.sleep(3000);
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				finally {
					forProducer.release();
				}

			}
		}
	}

	static class Producer extends Thread {
		String name;

		public Producer(String name) {
			this.name = name;
		}

		public void run() {
			while (true) {
				try {
					forProducer.acquire();
					list.push(N);
					N++;
					System.out.println("Producer " + name + " produced. Put " + N +" list size is " + list.size());
					
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} finally {
					try {
						Thread.sleep(3000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					 
					 forConsumer.release();
				}

			}

		}
	}

}
