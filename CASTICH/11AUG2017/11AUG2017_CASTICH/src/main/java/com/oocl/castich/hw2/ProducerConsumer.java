package com.oocl.castich.hw2;

public class ProducerConsumer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Queue q = new Queue();
		Producer p = new Producer(1, q);
		p.start();
		Producer p2 = new Producer(2, q);
		p2.start();
		Consumer c = new Consumer(1, q);
		Consumer c2 = new Consumer(2, q);
		c.start();
		c2.start();
	}

}

class Producer extends Thread{
	
	Queue q;
	int number;
	
	public Producer(int n, Queue q) {
		this.number = n;
		this.q = q;
	}
	
	@Override
	public void run() {
		for(int i=1; i<=10; i++) {
			try {
				synchronized(q){
					if(q.isNext()) {
						q.next(false);
						q.add();
						System.out.println("Producer #"+this.number+" puts "+q.getQueue()+".");
						q.notify();
						q.wait();
					}
				}
				Thread.sleep(100);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}

class Consumer extends Thread{
	int number;
	Queue q;
	
	public Consumer(int n, Queue q) {
		this.number = n;
		this.q = q;
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		for(int i=1; i<=10; i++) {
			try {
				synchronized(q) {
					if(!q.isNext()) {
						q.next(true);
						System.out.println("Consumer #"+this.number+" gets "+q.getQueue()+".");
						q.notify();
						q.wait();
					}
				}
			}catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}

class Queue extends Thread{
	int queue = 0;
	boolean next = true;
	
	public Queue() {
	}
	
	public int getQueue() {
		return this.queue;
	}
	
	public void add() {
		this.queue++;
	}
	

	public void next(boolean b) {
		this.next = b;
	}
	
	public boolean isNext() {
		return next;
	}
	
}
