package com.oocl.daluplo.hw1;

public class ProducerConsumer {
	
		   public static void main(String[] args) {
			   products c = new products();
		      Producer p1 = new Producer(c, 1);
		      Consumer c1 = new Consumer(c, 1);
		      Producer p2 = new Producer(c, 2);
		      Consumer c2 = new Consumer(c, 2);
		      p1.start(); 
		      c1.start();
		      p2.start(); 
		      c2.start();
		   }
}
class products {
	   private int contents;
	   private boolean available = false;
	   
	   public synchronized int get() {
	      while (available == false) {
	         try {
	            wait();
	         } catch (InterruptedException e) {}
	      }
	      available = false;
	      notifyAll();
	      return contents;
	   }
	   public synchronized void put(int value) {
	      while (available == true) {
	         try {
	            wait();
	         } catch (InterruptedException e) { } 
	      }
	      contents = value;
	      available = true;
	      notifyAll();
	   }
	}
	class Consumer extends Thread {
	   private products cubbyhole;
	   private int number;
	   
	   public Consumer(products c, int number) {
	      cubbyhole = c;
	      this.number = number;
	   }
	   public void run() {
	      int value = 0;
	      for (int i = 0; i < 10; i++) {
	         value = cubbyhole.get();
	         System.out.println("Consumer #" + this.number + " got: " + value);
	      }
	   }
	}
	class Producer extends Thread {
	   private products cubbyhole;
	   private int number;
	   public Producer(products c, int number) {
	      cubbyhole = c;
	      this.number = number;
	   } 
	   public void run() {
	      for (int i = 0; i < 10; i++) {
	         cubbyhole.put(i);
	         System.out.println("Producer #" + this.number + " put: " + i);
	         try {
	            sleep((int)(Math.random() * 100));
	         } catch (InterruptedException e) { }
	      } 
	   }
	}