package com.oocl.kadange.hw;

import java.nio.CharBuffer;

class BufferQueueTest {

	CharBuffer buffer;
	Boolean flag = false;
	
	public BufferQueueTest(int max){
		buffer = CharBuffer.allocate(max);
	}
	
	public synchronized void inputBufferTest(char val, String name){
		this.buffer.put(val);
		if(this.flag){
			try {
				System.out.println(name+" is waiting...");
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(name+" put: "+val);
		this.flag = true;
		notifyAll();
	}
	
	public synchronized void outputBufferTest(String name, int index){
		if(!this.flag){
			try {
				System.out.println(name+" is waiting...");
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(name+" got: "+this.buffer.get(index));
		this.flag = false;
		notifyAll();
	}
}

class ProducerTest implements Runnable{
	BufferQueueTest queue;
	private String name;
	private String input;
	private int max;
	
	public ProducerTest(BufferQueueTest q, String name, int max, String input) {
		this.queue = q;
		this.name = name;
		this.input = input;
		this.max = max;
		new Thread(this, "inputBuffer").start();
	}

	public void run() {
		char c;
		for(int i=0; i<this.max; i++){
			c = this.input.charAt(i);
			queue.inputBufferTest(c, name);
		}
	}
	
}

class ConsumerTest implements Runnable{
	BufferQueueTest queue;
	private String name;
	private int max;
	
	public ConsumerTest(BufferQueueTest q, String name, int max) {
		this.queue = q;
		this.name = name;
		this.max = max;
		new Thread(this, "outputBuffer").start();
	}

	public void run() {
		System.out.println("=============================================================================================="+this.queue.buffer.length());
		for(int i=0; i<this.max; i++){
			queue.outputBufferTest(this.name, i);
		}
	}
	
}

public class test_ProducerConsumer{
	
	public static void main(String args[]){
		String input = "apple12345test";
		int threadCount = 2;
		BufferQueueTest q = new BufferQueueTest(input.length()*threadCount);
		//Create producer thread
		for(int i=0; i<threadCount; i++) {
			new Thread(new ProducerTest(q, "Producer Thread "+(i+1), input.length(), input));
		}
		
		//Create consumer thread
		for(int i=0; i<threadCount; i++) {
			new Thread(new ConsumerTest(q, "\t\t\t\tConsumer Thread "+(i+1), input.length()));
		}
	}
	
}
