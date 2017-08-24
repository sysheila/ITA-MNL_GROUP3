package com.oocl.daluplo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class Ball{
	int name;
	int weight;
	public Ball(int bname, int bweigh) {
		name = bname;
		weight = bweigh;
	}
} // end Ball class

public class BalanceBall {
		
	public int scale(ArrayList<Ball> left, ArrayList<Ball> right, int times) {
		// returns -1 == left heavier
		// returns 0 == equal weight
		// returns 1 = right heavier
		int value = 0;

		if(getSumWeigh(left)>getSumWeigh(right)) {
			value = -1;
		}
		else if(getSumWeigh(left)<getSumWeigh(right)) {
			value = 1;
		}
		else if(getSumWeigh(left)==getSumWeigh(right)) {
			value = 0;
		}
		return value;
	}
	
	public static int totalWeightInt(List<Integer> arr) {
		int sum=0;
		
		for(int i: arr ) {
			sum += i;
		}

		return sum;
	}
		
	public int getSumWeigh(ArrayList<Ball> balls) {
		int totalWeight = 0;
		for (Ball b:balls) {
			totalWeight += b.weight;
		}
		return totalWeight;
	}

	public static void balanceSolver(int[] arr) {
		
		int i,j,ind;
		int left = 0;
		int right = 0;

		List<Integer> a= new ArrayList<Integer>();
		List<Integer> b = new ArrayList<Integer>();
		List<Integer> c = new ArrayList<Integer>();
		List<Integer> heavy = new ArrayList<Integer>();
		List<Integer> light = new ArrayList<Integer>();

		
		ind=0;
		for(i=0;i<12;i++){
			System.out.print(arr[i] + " ");
		}
		System.out.println();
		System.out.println("---weigh1: 1 2 3 4 vs 5 6 4 8---");
		
		for(i=0;i<4;i++) {
			a.add(arr[ind]);
			ind++;
		}
		for(i=0;i<4;i++) {
			b.add(arr[ind]);
			ind++;
		}
		for(i=0;i<4;i++) {
			c.add(arr[ind]);
			ind++;
		}
		
		left = totalWeightInt(a);
		right = totalWeightInt(b);
		
		if(left==right) {
			System.out.println("1 2 3 4 == 5 6 7 8");
			left = totalWeightInt(c);
			right = totalWeightInt(a);
			
			System.out.println("--- weigh2: 9 10 11  vs 1 2 3 ---");
			if(left==right) {
				System.out.println("9 10 11 == 1 2 3");
				System.out.println("--- weigh3: 12 vs 4 ---");
				if(c.get(3) > a.get(3)) {
					System.out.println("Heavy Ball: 12");
				}
				else {
					System.out.println("Light Ball: 12");
				}
			}
			else if (left>right) {
				System.out.println("9 10 11 > 1 2 3");
				System.out.println("---weigh3: 9 vs 10 ---");
				if(c.get(0)==c.get(1)) System.out.println("Heavy Ball: 11");
				else if(c.get(0)>c.get(1)) System.out.println("Heavy Ball: 9");
				else if(c.get(0)<c.get(1)) System.out.println("Heavy Ball: 10");
			}
			else if (left<right) {
				System.out.println("9 10 11 < 1 2 3");
				System.out.println("---weigh3: 9 vs 10---");
				if(c.get(0)==c.get(1)) System.out.println("Light Ball: 11");
				else if(c.get(0)>c.get(1)) System.out.println("Light Ball: 10");
				else if(c.get(0)<c.get(1)) System.out.println("Light Ball: 9");
			}
		
		}// compare a==b
		else if (left>right) {
			//a is heavier
			System.out.println("1 2 3 4 > 5 6 7 8");
			for(int counter:a) {
				heavy.add(counter);
			}
			for(int counter:b) {
				light.add(counter);
			}
			
			System.out.println("---weigh2: 1 2 5 vs 3 4 6 ---");
			left = heavy.get(0)+heavy.get(1)+light.get(0);
			right = heavy.get(2)+heavy.get(3)+light.get(1);
			
			if(left>right) {
				System.out.println("1 2 5 > 3 4 6");
				System.out.println("---weigh3: 1 vs 2---");
				if(heavy.get(0)==heavy.get(1)) System.out.println("Light Ball: 6");
				else if(heavy.get(0)>heavy.get(1)) System.out.println("Heavy Ball: 1");
				else if(heavy.get(0)<heavy.get(1)) System.out.println("Heavy Ball: 2");
			}
			else if(left<right) {
				System.out.println("1 2 5 < 3 4 6");
				System.out.println("---weigh3: A3 vs A4---");
				if(heavy.get(2)==heavy.get(3)) System.out.println("Light Ball: 5");
				else if(heavy.get(2)>heavy.get(3)) System.out.println("Heavy Ball: 3");
				else if(heavy.get(2)<heavy.get(3)) System.out.println("Heavy Ball: 4");
			}
			else if(left==right) {
				System.out.println("1 2 5 == 3 4 6");
				System.out.println("---weigh3: 7 vs 8---");
				if(light.get(2) > light.get(3)) {
					System.out.println("Light Ball: 8");
				}
				else {
					System.out.println("Light Ball: 7");
				}
			}
			
			
		}
		else if (left<right) {
			//b is heavier
			System.out.println("1 2 3 4 < 5 6 7 8");
			for(int counter:b) {
				heavy.add(counter);
			}
			for(int counter:a) {
				light.add(counter);
			}
			System.out.println("---weigh2: 5 6 1 vs 7 8 2 ---");
			left = heavy.get(0)+heavy.get(1)+light.get(0);
			right = heavy.get(2)+heavy.get(3)+light.get(1);
			
			if(left>right) {
				System.out.println("5 6 1 > 7 8 2");
				System.out.println("---weigh3: 5 vs 6 ---");
				if(heavy.get(0)==heavy.get(1)) System.out.println("Light Ball: 2");
				else if(heavy.get(0)>heavy.get(1)) System.out.println("Heavy Ball: 5");
				else if(heavy.get(0)<heavy.get(1)) System.out.println("Heavy Ball: 6");
			}
			else if(left<right) {
				System.out.println("5 6 1 < 7 8 2");
				System.out.println("---weigh3: 7 vs 8 ---");
				if(heavy.get(2)==heavy.get(3)) System.out.println("Light Ball: 1");
				else if(heavy.get(2)>heavy.get(3)) System.out.println("Heavy Ball: 7");
				else if(heavy.get(2)<heavy.get(3)) System.out.println("Heavy Ball: 8");
			}
			else if(left==right) {
				System.out.println("5 6 1 == 7 8 2");
				System.out.println("---weigh3: 3 vs 4---");
				if(light.get(2) > light.get(3)) {
					System.out.println("Light Ball: 4");
				}
				else {
					System.out.println("Light Ball: 3");
				}
			}
		}
		
	}// end of balanceSolver function
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		int[] arr = {0,0,0,0,1,0,0,0,0,0,0,0}; //sample arr for testing
		//randomize values of array
		Random rand = new Random();
		int odd = rand.nextInt(12);
		int weightFlag = rand.nextInt(2);
		int[] ballArr = new int[12];
		
		for(int i=0;i<12;i++) {
			if(i==odd) {
				if(weightFlag==0) ballArr[i] = -1;
				else ballArr[i] = 1;
			}
			else ballArr[i] = 0;
		}

		balanceSolver(ballArr);
	}
	
} // end of BalanceBall class
