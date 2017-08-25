package com.calculator;

import java.util.Random;

/*class setA {
	int weight;
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}
	
	public setA(int[] setABalls){
	//	setABalls.
	}

}

*/
public class BalancingBalls {
	static int max = 12;
	static int min = 1;
	
	public static int[] setA = {1,2,3,4};
	public int[] setB = {5,6,7,8};
	public int[] setC = {9,10,11,12};

	public BalancingBalls() {
	
	}
	public void setA(int oddBall) {
		
	}

	public static int sumOfA(int[] a) {
		int sumA=0;
		for(int i=0; i<a.length; i++) {
			sumA = sumA + a[i];
		}
		return sumA;
	}
	
	public static int sumOfB(int[] b) {
		int sumB=0;
		for(int i=0; i<b.length; i++) {
			sumB = sumB + b[i];
		}
		return sumB;
	}
	
	public static int sumOfC(int[] c) {
		int sumC=0;
		for(int i=0; i<c.length; i++) {
			sumC = sumC + c[i];
		}
		return sumC;
	}
	
	public static void main(String[] args) {
		  int[] balls = new int[12];
		  int oddBall;
		  Random rn = new Random();
		  oddBall = rn.nextInt(max - min + 1) + min;
			int [] setABalls = new int[4];
			int [] setBBalls = new int[4];
			int [] setCBalls = new int[4];
			int [] newA = new int[3];
			int [] newB = new int[3];
			int [] newC = new int[3];
		  System.out.print("Oddball: " + oddBall + "\n");
		  setWeight(oddBall, balls, setABalls, setBBalls, setCBalls);
		/*  for(int i = 0; i<4; i++) {
				System.out.println("A : " + i + setABalls[i]);
				System.out.println("B : " + i + setBBalls[i]);
				System.out.println("C : " + i + setCBalls[i]);
		  }*/
		  
		  if( sumOfA(setABalls) == sumOfB(setBBalls)) {
			  System.out.println("Odd is in C");
			  // insert method here
			  // weigh 6 7 8 vs 9 10  11
			  System.arraycopy(setBBalls, 1, newB, 0, 3);
			  System.arraycopy(setCBalls, 0, newC, 0, 3);
			  //case 1.1
			  if(sumOfA(newB)==sumOfC(newC)) {
				  System.out.println("Odd is in 12");
			  }
			  else if(sumOfC(newC)>sumOfB(newB)) {
				  
			  }
			  
		  }
		  else if (sumOfA(setABalls) == sumOfC(setCBalls)) {
			  System.out.println("Odd is in B");
		  }
		  else {
			  System.out.println("Odd is in A");
		  }
	} 
	
	public static void setWeight(int oddBall, int[] balls, int[] a, int[] b, int[] c) {
		for(int i=0; i<12; i++) {
			if(i==(oddBall-1)) {
				balls[oddBall-1] = -1;
			}
			else {
				balls[i]  = 0;
			}
			System.out.println(i+ " " + balls[i]);
			
		}
		System.arraycopy(balls, 0, a, 0, 4);
		System.arraycopy(balls, 4, b, 0, 4);
		System.arraycopy(balls, 8, c, 0, 4);
		
	}
}
