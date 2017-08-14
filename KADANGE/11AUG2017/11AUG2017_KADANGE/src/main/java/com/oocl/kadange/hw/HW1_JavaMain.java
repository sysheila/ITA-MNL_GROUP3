package com.oocl.kadange.hw;

public class HW1_JavaMain {

	public static void main(String[] args) {
		// Tower of Hanoi
		HW1_Num1TowerOfHanoi hw_num1 = new HW1_Num1TowerOfHanoi();
		hw_num1.towerOfHanoi(3);
		
		System.out.println("======================================");
		//Producer / Consumer
		String input = "apple12345test";
		int threadCount = 2;
		BufferQueue q = new BufferQueue(input.length()*threadCount);
		//Create producer thread
		for(int i=0; i<threadCount; i++) {
			new Thread(new Producer(q, "Producer Thread "+(i+1), input.length(), input));
		}
		
		//Create consumer thread
		for(int i=0; i<threadCount; i++) {
			new Thread(new Consumer(q, "\t\t\t\tConsumer Thread "+(i+1), input.length()));
		}
	}
	
}
