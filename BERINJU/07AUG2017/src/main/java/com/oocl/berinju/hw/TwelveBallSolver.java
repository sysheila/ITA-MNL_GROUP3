/*	Author : Junno Paolo M. Beringuela
 * 	Date : August 23, 2017
 *  Description : A java program that finds the odd ball from the 12 balls problem.
 * 	References :  http://www.primepuzzle.com/leeslatest/12_ball_solution.html with logical solution coming from
 * 				  http://www.curiouser.co.uk/ 
 * 
 */


package com.oocl.berinju.hw;

import java.util.ArrayList;


public class TwelveBallSolver {
	/*
	 * USAGE : Modify static variable ODD_BALL_INDEX with values 0 to 11
	 * 		   Modify weight handicap with values 1 or -1
	 * 		   Run the program to determine the index of the odd ball. 
	 * */
	private static int ODD_BALL_INDEX = 11; // 12 indices from 0 to 11
	private static int WEIGHT = 1; // 1 for heavier, -1 for lighter
	private ArrayList<Ball> mainList = new ArrayList<Ball>();
	
	public static void main(String[] args) {
		TwelveBallSolver solver = new TwelveBallSolver();
		init(solver.mainList);
		solve(solver.mainList);
	}
	
	private static void init(ArrayList<Ball> mainList) {
		mainList.add(new Ball("A1"));
		mainList.add(new Ball("A2"));
		mainList.add(new Ball("A3"));
		mainList.add(new Ball("A4"));
		mainList.add(new Ball("B1"));
		mainList.add(new Ball("B2"));
		mainList.add(new Ball("B3"));
		mainList.add(new Ball("B4"));
		mainList.add(new Ball("C1"));
		mainList.add(new Ball("C2"));
		mainList.add(new Ball("C3"));
		mainList.add(new Ball("C4"));
		
		for(int i=0;i<12;i++) {
			if(i==ODD_BALL_INDEX) {
				if(WEIGHT==1) mainList.get(i).setWeight(1);
				else mainList.get(i).setWeight(-1);
			}
			else mainList.get(i).setWeight(0);
		}
		
		for(Ball b : mainList) {
			System.out.println(b.getName() + " " + b.getWeight());
		}
	}
	
	private static void solve(ArrayList<Ball> mainList) {
		// TODO Auto-generated method stub
		ArrayList<Ball> leftPan = new ArrayList<Ball>();
		ArrayList<Ball> rightPan = new ArrayList<Ball>();
		
		//FIRST WEIGH-IN
		//Include two of the three groups into the balance (eg. A1-A4 and B1-B4 excluding C1-C4)
		for(int i=0; i<mainList.size()-4; i++) {
			if(i<4) leftPan.add(mainList.get(i));
			else rightPan.add(mainList.get(i));
		}
		weighIn(leftPan, rightPan, mainList);
		
		

	}

	private static void weighIn(ArrayList<Ball> leftPan, ArrayList<Ball> rightPan, ArrayList<Ball> mainList) {
		// TODO Auto-generated method stub
		int leftTotalWeight = getTotalWeight(leftPan); //First weigh-in
		int rightTotalWeight = getTotalWeight(rightPan);
		
		//First weigh-in
		if(leftTotalWeight > rightTotalWeight) {//A1 A2 A3 A4 v B1 B2 B3 B4
			//Renaming to Heavy's and Light's
			for(int i=0; i<mainList.size()-4; i++) {
				if(i==0) mainList.get(i).setName("H1");
				if(i==1) mainList.get(i).setName("H2");
				if(i==2) mainList.get(i).setName("H3");
				if(i==3) mainList.get(i).setName("H4");
				if(i==4) mainList.get(i).setName("L1");
				if(i==5) mainList.get(i).setName("L2");
				if(i==6) mainList.get(i).setName("L3");
				if(i==7) mainList.get(i).setName("L4");
			}
			
			//Setting up the balance for 2nd weigh-in
			leftPan.clear();
			rightPan.clear();
			leftPan.add(mainList.get(0)); //H1
			leftPan.add(mainList.get(1)); //H2
			leftPan.add(mainList.get(4)); //L1
			rightPan.add(mainList.get(2)); //H3
			rightPan.add(mainList.get(3)); //H4
			rightPan.add(mainList.get(5)); //L2
			leftTotalWeight = getTotalWeight(leftPan);
			rightTotalWeight = getTotalWeight(rightPan);
			
			//H1 H2 L1 v H3 H4 L2
	
			//Third weigh-in
			if(leftTotalWeight > rightTotalWeight) {
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(0)); //H1
				rightPan.add(mainList.get(1)); //H2
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion H1 = Heavy
				if(leftTotalWeight > rightTotalWeight) { 
					System.out.println("The ball is heavy at index 0");
				}
				//Conclusion H2 = Heavy
				else if(leftTotalWeight < rightTotalWeight) { 
					System.out.println("The ball is heavy at index 1");
				}
				//Conclusion L2 = Light
				else { //leftTotalWeight == rightTotalWeight
					System.out.println("The ball is light at index 5");
				}
			}
			//Third weigh-in
			else if(leftTotalWeight < rightTotalWeight) {
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(2)); //H3
				rightPan.add(mainList.get(3)); //H4
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion H3 = Heavy
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is heavy at index 2");
				}
				//Conclusion H4 = Heavy
				else if(leftTotalWeight < rightTotalWeight) {
					System.out.println("The ball is heavy at index 3");
				}
				//Conclusion L1 = Light
				else { //leftTotalWeight == rightTotalWeight
					System.out.println("The ball is light at index 4");
				}
			}
			//Third weigh-in
			else { //leftTotalWeight == rightTotalWeight
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(6)); //L3
				rightPan.add(mainList.get(7)); //L4
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion L4 = Light
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is light at index 7");
				}
				//Conclusion L3 = Light
				else { //leftTotalWeight < rightTotalWeight
					System.out.println("The ball is heavy at index 6");
				}
			}
			
			
		}
		//First weigh-in
		else if(leftTotalWeight < rightTotalWeight) {
			//Renaming to Heavy's and Light's
			for(int i=0; i<mainList.size()-4; i++) {
				if(i==0) mainList.get(i).setName("L1");
				if(i==1) mainList.get(i).setName("L2");
				if(i==2) mainList.get(i).setName("L3");
				if(i==3) mainList.get(i).setName("L4");
				if(i==4) mainList.get(i).setName("H1");
				if(i==5) mainList.get(i).setName("H2");
				if(i==6) mainList.get(i).setName("H3");
				if(i==7) mainList.get(i).setName("H4");
			}
			
			//Setting up the balance
			leftPan.clear();
			rightPan.clear();
			leftPan.add(mainList.get(4)); //H1
			leftPan.add(mainList.get(5)); //H2
			leftPan.add(mainList.get(0)); //L1
			rightPan.add(mainList.get(6)); //H3
			rightPan.add(mainList.get(7)); //H4
			rightPan.add(mainList.get(1)); //L2
			leftTotalWeight = getTotalWeight(leftPan);
			rightTotalWeight = getTotalWeight(rightPan);
			

			//Third weigh-in
			if(leftTotalWeight > rightTotalWeight) {
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(4)); //H1
				rightPan.add(mainList.get(5)); //H2
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion H1 = Heavy
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is heavy at index 4");
				}
				//Conclusion H2 = Heavy
				else if(leftTotalWeight < rightTotalWeight) {
					System.out.println("The ball is heavy at index 5");
				}
				//Conclusion L2 = Light
				else { //leftTotalWeight == rightTotalWeight
					System.out.println("The ball is light at index 1");
				}
			}
			//Third weigh-in
			else if(leftTotalWeight < rightTotalWeight) {
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(6)); //H3
				rightPan.add(mainList.get(7)); //H4
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion H3 = Heavy
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is heavy at index 6");
				}
				//Conclusion H4 = Heavy
				else if(leftTotalWeight < rightTotalWeight) {
					System.out.println("The ball is heavy at index 7");
				}
				//Conclusion L1 = Light
				else { //leftTotalWeight == rightTotalWeight
					System.out.println("The ball is light at index 0");
				}
			}
			//Third weigh-in
			else { //leftTotalWeight == rightTotalWeight
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(2)); //L3
				rightPan.add(mainList.get(3)); //L4
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion L4 = Light
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is light at index 3");
				}
				//Conclusion L3 = Light
				else { //leftTotalWeight < rightTotalWeight
					System.out.println("The ball is light at index 2");
				}
			}
		}
		//First weigh-in
		else { //leftTotalWeight == rightTotalWeight
			//Setting up the balance
			leftPan.clear();
			rightPan.clear();
			leftPan.add(mainList.get(8)); //C1
			leftPan.add(mainList.get(9)); //C2
			leftPan.add(mainList.get(10)); //C3
			rightPan.add(mainList.get(0)); //A1
			rightPan.add(mainList.get(1)); //A2
			rightPan.add(mainList.get(2)); //A3
			leftTotalWeight = getTotalWeight(leftPan);
			rightTotalWeight = getTotalWeight(rightPan);

			//Third weigh-in
			if(leftTotalWeight > rightTotalWeight) {
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(8)); //C1
				rightPan.add(mainList.get(9)); //C2
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion C1 = Heavy
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is heavy at index 8");
				}
				//Conclusion C2 = Heavy
				else if(leftTotalWeight < rightTotalWeight) {
					System.out.println("The ball is heavy at index 9");
				}
				//Conclusion C3 = Heavy
				else { //leftTotalWeight == rightTotalWeight
					System.out.println("The ball is heavy at index 10");
				}
			}
			//Third weigh-in
			else if(leftTotalWeight < rightTotalWeight) {
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(8)); //C1
				rightPan.add(mainList.get(9)); //C2
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion C2 = Light
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is light at index 9");
				}
				//Conclusion C3 = Light
				else if(leftTotalWeight < rightTotalWeight) {
					System.out.println("The ball is light at light 10");
				}
				//Conclusion C1 = Light
				else { //leftTotalWeight == rightTotalWeight
					System.out.println("The ball is light at index 8");
				}
			}
			//Third weigh-in
			else { //leftTotalWeight == rightTotalWeight
				leftPan.clear();
				rightPan.clear();
				leftPan.add(mainList.get(11)); //C4
				rightPan.add(mainList.get(3)); //A4
				leftTotalWeight = getTotalWeight(leftPan);
				rightTotalWeight = getTotalWeight(rightPan);
				
				//Conclusion C4 = Heavy
				if(leftTotalWeight > rightTotalWeight) {
					System.out.println("The ball is heavy at index 11");
				}
				//Conclusion C4 = Light
				else { //leftTotalWeight < rightTotalWeight
					System.out.println("The ball is light at index 11");
				}
			
			}
		}

		
	}

	private static int getTotalWeight(ArrayList<Ball> pan) {
		// TODO Auto-generated method stub
		int total = 0;
		for(Ball b: pan) {
			total += b.getWeight();
		}
		return total;
	}
	


}

