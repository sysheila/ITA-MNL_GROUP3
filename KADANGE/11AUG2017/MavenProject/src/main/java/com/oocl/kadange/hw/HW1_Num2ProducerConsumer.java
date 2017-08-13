package com.oocl.kadange.hw;

import java.nio.CharBuffer;

class BufferQueue {

	CharBuffer buffer;
	Boolean flag = false;
	
	public BufferQueue(int max){
		buffer = CharBuffer.allocate(max);
	}
	
	public synchronized void inputBuffer(char val, String name){
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
	
	public synchronized void outputBuffer(String name, int index){
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

class Producer implements Runnable{
	BufferQueue queue;
	private String name;
	private String input;
	private int max;
	
	public Producer(BufferQueue q, String name, int max, String input) {
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
			queue.inputBuffer(c, name);
		}
	}
	
}

class Consumer implements Runnable{
	BufferQueue queue;
	private String name;
	private int max;
	
	public Consumer(BufferQueue q, String name, int max) {
		this.queue = q;
		this.name = name;
		this.max = max;
		new Thread(this, "outputBuffer").start();
	}

	public void run() {
		for(int i=0; i<this.max; i++){
			queue.outputBuffer(this.name, i);
		}
	}
	
}
