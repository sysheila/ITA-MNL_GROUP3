package com.oocl.daluplo.sw1;
import java.util.*;

public class Fibo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for(int i=1;i<=10;i++) {
			new Thread(new Fibonnaci(i)).start();
		}
	}

}

class Fibonnaci implements Runnable{
	private int count;
	private final int n;
	
	public Fibonnaci(int n) {
		this.n = n;
	}
	
	public Integer next() {
		return fibii(count++);
	}
	
	public int fibii(int n) {
		if (n<2) return 1;
		return fibii(n-2)+fibii(n-1);
	}
	
	public void run() {
		Integer[] sequence = new Integer[n];
		for(int i =0; i< n;i++){
			sequence[i] = next();
		}
		System.out.println("Seq. of " + ": " + Arrays.toString(sequence));
	}
	
	
}

