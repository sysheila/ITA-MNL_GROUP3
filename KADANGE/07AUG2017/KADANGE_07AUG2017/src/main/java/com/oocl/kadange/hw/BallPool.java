package com.oocl.kadange.hw;

import java.util.HashMap;
import java.util.Map.Entry;

public class BallPool extends Ball{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//		Ball ball = new Ball();
		int[] ballPool = createBallPool(BallState.heavy);
		HashMap<String,int[]> firstWeightResult = new HashMap<String,int[]>();
		HashMap<String,int[]> secondWeightResult = new HashMap<String,int[]>();
		
		for(int i=0;i<ballPool.length;i++) {
			System.out.println("Ball"+(i+1)+": "+ballPool[i]);
		}
		
		firstWeightResult=firstWeight(ballPool);
		
		secondWeightResult = secondWeight(firstWeightResult);
		
		System.out.println("");
		calculateSecondWeight(secondWeightResult);
		
	}
	
	public static HashMap<String,int[]> readyBallGroup(HashMap<String,int[]> ballGroup){
		HashMap<String,int[]> newBallGroup = new HashMap<String,int[]>();
		
		int[] group1 = new int[3];
		int[] group2 = new int[3];
		int count = 1;
		
		for(String key : ballGroup.keySet()) {
			int[] groupVal = ballGroup.get(key);
			if(key.equals(Scale.notGroup)) {
				newBallGroup.put(key, ballGroup.get(key));
			}
			//Removes last ball from group
			if(count==1) {
				group1[0]=groupVal[0];
				group2[1]=groupVal[1];
				group2[2]=groupVal[2];
				newBallGroup.put(key, group1);
			}else if(count==2) {
				group2[0]=groupVal[0];
				group1[1]=groupVal[1];
				group1[2]=groupVal[2];
				newBallGroup.put(key, group2);
			}
			count++;
		}
		
		return newBallGroup;
	}
	
	public static HashMap<String, int[]> secondWeight(HashMap<String, int[]> firstResult) {
		HashMap<String, int[]> result = new HashMap<String, int[]>();
		
		result = calculateSecondWeight(firstResult);
		
		return result;
	}
	
	public static HashMap<String, int[]> firstWeight(int[] balls) {
		HashMap<String, int[]> result = new HashMap<String, int[]>();
		HashMap<Integer, int[]> groupList = getFirstWeightGroup(balls);
		
		result = calculateFirstWeight(groupList);
		
		//Returns first weigh result for 2nd weigh calculation
		return readyBallGroup(result);
	}
	
	private static HashMap<Integer, int[]> getFirstWeightGroup(int[] balls){
		int groups = 3, counter = 0;
		HashMap<Integer,int[]> groupList = new HashMap<Integer, int[]>();
		
		for(int i=0;i<groups;i++) {
			int[] group = new int[4];
			for(int j=0;j<group.length;j++) {
				group[j] = balls[counter];
				counter++;
			}
			groupList.put(i, group);
		}
		
		return groupList;
	}
	
	public static HashMap<String, int[]> calculateSecondWeight(HashMap<String,int[]> groupList) {
		HashMap<String, int[]> groupResult = new HashMap<String, int[]>();
		int groupSize = groupList.size(), count=0;
		
		//Calculate weight of first two groups. 
		//Last index in groups[] is the healthy ball group
		int[] groups = new int[groupSize];
		for(String key : groupList.keySet()) {
			groups[count]=calculate(groupList.get(key));
			count++;
		}
		
		//Weight first and second index
		weigh(groups[0],groups[1]);
		String compareResult = Scale.getCompareResult();
		
		if(compareResult.equals(Scale.compareEqual)) {
			groupResult.put(Scale.GetGroup+": Group2", groupList.get(1));
			groupResult.put(Scale.GetGroup+": Group3", groupList.get(2));
			groupResult.put(Scale.notGroup, groupList.get(0));
		}else if(compareResult.equals(Scale.compareLeft) || compareResult.equals(Scale.compareRight)) {
			groupResult.put(Scale.GetGroup+": Group1", groupList.get(0));
			groupResult.put(Scale.GetGroup+": Group2", groupList.get(1));
			groupResult.put(Scale.notGroup, groupList.get(2));
		}
		
		return groupResult;
	}
	
	public static HashMap<String, int[]> calculateFirstWeight(HashMap<Integer,int[]> groupList) {
		HashMap<String, int[]> groupResult = new HashMap<String, int[]>();
		String compareResult = "";
		int groupSize = groupList.size();
		
		//Calculate weight of first two groups. 
		//Last index in groups[] is the healthy ball group
		int[] groups = new int[groupSize];
		for(int i=0;i<groupSize;i++) {
			groups[i]=calculate(groupList.get(i));
		}
		
		//Weight first and second index
		weigh(groups[0],groups[1]);
		compareResult = Scale.getCompareResult();
		
		if(compareResult.equals(Scale.compareEqual)) {
			groupResult.put(Scale.GetGroup+": Group2", groupList.get(1));
			groupResult.put(Scale.GetGroup+": Group3", groupList.get(2));
			groupResult.put(Scale.notGroup, groupList.get(0));
		}else if(compareResult.equals(Scale.compareLeft) || compareResult.equals(Scale.compareRight)) {
			groupResult.put(Scale.GetGroup+": Group1", groupList.get(0));
			groupResult.put(Scale.GetGroup+": Group2", groupList.get(1));
			groupResult.put(Scale.notGroup, groupList.get(2));
		}
		
		return groupResult;
	}
	
	private static int calculate(int[] group) {
		int value=0;
		
		for(int i=0;i<group.length;i++) {
			value=value+group[i];
		}
		return value;
	}
	
	private static void weigh(int left, int right) {
		Scale.readyCompare();
		if(left == right) {
			Scale.setIsEqual(true);
		}else if(left > right) {
			Scale.setIsLeft(true);
		}else if(left < right) {
			Scale.setIsRight(true);
		}
	}

}