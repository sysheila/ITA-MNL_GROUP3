package com.oocl.kadange.sw;

import java.util.Arrays;

class Fibonacci implements /*Generator<String>,*/ Runnable {
	private int count;
	private final int n;
	
	public Fibonacci(int n){
		this.n = n; 
	}	
	
	private Integer next() {
		return fib(count++);
	}

	private int fib(int n) {
		if(n < 2) return 1;
		return fib(n-2) + fib(n-1);
	}
	
	public void run() {
		Integer[] sequence = new Integer[n];
		for(int i=0;i<n;i++){
			sequence[i] = next();
		}
		System.out.println("Seq. of "+n+": "+Arrays.toString(sequence));
	}
}

public class SW1_MultithreadFibo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for(int i=2;i<=10;i++){
//			new Thread(new Fibonacci(i)).start();
			Thread thread = new Thread(new Fibonacci(i));
			System.out.println(thread.getName()+" "+thread.getState()+" "+i);
			thread.start();
			System.out.println(thread.getName()+" "+thread.getState());
		}
	}

}
