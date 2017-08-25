package com.oocl.castich.hw1;

import java.util.Random;

public class Main {
	static boolean balanced=false;
	
	public static void main(String[] args) {
		
		Random rand = new Random();
		int odd = rand.nextInt(12);
		int weightFlag = rand.nextInt(2);
		int[] ballArr = new int[12];
		
		System.out.print("12 Balls: [ ");
		for(int i=0; i<12; i++) {
			if(odd==i) {
				ballArr[i]= weightFlag==0 ? -1 : 1;
			}
			else {
				ballArr[i] = 0;
			}
			System.out.print(ballArr[i]+" ");
		}
		System.out.println("]");
		

		int[] groupA = new int[4]; /*Ball 1 - 4 */
		int[] groupB = new int[4]; /*Ball 5 - 8 */
		int[] groupC = new int[4]; /*Ball 9 - 12*/
		
		for(int i=0; i<4; i++) {
			groupA[i] = ballArr[i];
			groupB[i] = ballArr[i+4];
			groupC[i] = ballArr[i+8];
			
		}
		
				
		
		//1st scale
		balanced = balance(groupA, groupB);
		
		if(balanced) {
			//Group A and B balls are safe.
			int[] groupD = new int[] {groupC[0],groupC[1],groupC[2]};
			int[] groupE = new int[] {groupA[0], groupA[1], groupA[2]};
			
			
			//2nd scale in this scenario
			balanced = balance(groupD, groupE);
			
			if(balanced) {
				int c4 = groupC[3];
				int a4 = groupA[3];
				
				//3rd scale in this scenario
				if(c4 > a4) {
					System.out.println("Ball 12 is the odd, heavier ball.");
				}
				else if(c4 < a4) {
					System.out.println("Ball 12 is the odd, lighter ball.");
				}
			}
			
			else {
				int c1 = groupC[0];
				int c2 = groupC[1];
				
				// See which group from the last weigh in is heavier.
				if(isLeftHeavier(groupD, groupE)) {
					//3rd scale in this scenario
					balanced = balance(c1, c2);
					
					if(balanced) {
						System.out.println("Ball 11 is the odd, heavier ball.");
					}
					
					else if(c1>c2){
						System.out.println("Ball 9 is the odd, heavier ball.");
					}
					
					else if(c1<c2) {
						System.out.println("Ball 10 is the odd, heavier ball.");
					}
					
				}
				
				else {
					//3rd scale in this scenario
					balanced = balance(c1, c2);
					
					if(balanced) {
						System.out.println("Ball 11 is the odd, lighter ball.");
					}
					
					else if(c1>c2){
						System.out.println("Ball 10 is the odd, lighter ball.");
					}
					
					else if(c1<c2) {
						System.out.println("Ball 9 is the odd, lighter ball.");
					}
				}
			}
			
		}
		else {
			
			if(isLeftHeavier(groupA, groupB)) {
				int[] groupH = new int[] {groupA[0],groupA[1],groupB[0]};
				int[] groupL = new int[] {groupA[2], groupA[3],groupB[1]};
				
				//2nd scale in this scenario
				balanced = balance(groupH, groupL);
				if(balanced) {
					int b3 = groupB[2];
					int b4 = groupB[3];
					//3rd scale in this scenario
					if(b3 > b4) {
						System.out.println("Ball 8 is the odd, lighter ball.");
					}
					else if(b3 < b4) {
						System.out.println("Ball 7 is the odd, lighter ball.");
					}
				}
				
				else if(isLeftHeavier(groupH, groupL)) {
					//3rd scale in this scenario
					balanced = balance(groupH[0], groupH[1]);
					if(balanced) {
						System.out.println("Ball 6 is the odd, lighter ball.");
					}
					else if(groupH[0]>groupH[1]) {
						System.out.println("Ball 1 is the odd, heavier ball.");
					}
					else {
						System.out.println("Ball 2 is the odd, heavier ball.");
					}
				}
				
				else {
					balanced = balance(groupL[0], groupL[1]);
					if(balanced) {
						System.out.println("Ball 5 is the odd, lighter ball.");
					}
					else if(groupL[0] > groupL[1]) {
						System.out.println("Ball 3 is the odd, heavier ball.");
					}
					else {
						System.out.println("Ball 4 is the odd, heavier ball.");
					}
				}
			}
			
			else {
				int[] groupH = new int[] {groupB[0],groupB[1],groupA[0]};
				int[] groupL = new int[] {groupB[2], groupB[3],groupA[1]};
				
				//2nd scale in this scenario
				balanced = balance(groupH, groupL);
				if(balanced) {
					int a3 = groupA[2];
					int a4 = groupA[3];
					//3rd scale in this scenario
					if(a3 > a4) {
						System.out.println("Ball 4 is the odd, lighter ball.");
					}
					else if(a3 < a4) {
						System.out.println("Ball 3 is the odd, lighter ball.");
					}
				}
				
				else if(isLeftHeavier(groupH, groupL)) {
					//3rd scale in this scenario
					balanced = balance(groupH[0], groupH[1]);
					if(balanced) {
						System.out.println("Ball 2 is the odd, lighter ball.");
					}
					else if(groupH[0]>groupH[1]) {
						System.out.println("Ball 5 is the odd, heavier ball.");
					}
					else {
						System.out.println("Ball 6 is the odd, heavier ball.");
					}
				}
				
				else {
					balanced = balance(groupL[0], groupL[1]);
					if(balanced) {
						System.out.println("Ball 1 is the odd, lighter ball.");
					}
					else if(groupL[0] > groupL[1]) {
						System.out.println("Ball 7 is the odd, heavier ball.");
					}
					else {
						System.out.println("Ball 8 is the odd, heavier ball.");
					}
				}
			}
			
		}
		
		
	}
	
	public static boolean balance(int[] a, int[] b) {
		if(arraySum(a)>arraySum(b) || arraySum(a)<arraySum(b)) {
			return false;
		}
		return  true;
	}
	
	public static boolean balance(int i, int j) {
		if(i>j || i<j) {
			return false;
		}
		return true;
	}
	
	public static int arraySum(int[] a) {
		int sum=0;
		for(int i=0; i<a.length; i++) {
			sum+=a[i];
		}
		return sum;
	}
	
	public static boolean isLeftHeavier(int[] left, int[] right) {
		int leftSum = arraySum(left);
		int rightSum = arraySum(right);
		
		if(leftSum>rightSum) {
			return true;
		}
		return false;
	}
	
	
}
