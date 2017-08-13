package com.oocl.kadange.hw;

public class HW1_JavaMain {

	public static void main(String[] args) {
		// Tower of Hanoi
		HW1_Num1TowerOfHanoi hw_num1 = new HW1_Num1TowerOfHanoi();
		hw_num1.towerOfHanoi(3);
		
		System.out.println("======================================");
		//Producer / Consumer
		String input = "apple";
		BufferQueue q = new BufferQueue(input.length());
		
		new Thread(new Producer(q, "Thread 1", input.length(), input));
		new Thread(new Consumer(q, "Thread 2", input.length()));
	}
	
}
