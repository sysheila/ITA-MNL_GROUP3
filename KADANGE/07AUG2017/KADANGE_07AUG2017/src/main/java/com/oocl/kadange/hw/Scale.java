package com.oocl.kadange.hw;

import java.util.HashMap;

public class Scale {
	//Identifies what group to get
	static String GetGroup = "Get this group";
	static String notGroup = "Do not get this group";
	
	
	static String FWGrp1EqlGrp2 = "Group 1 is equal to group 2";
	static String FWGrp1GrtGrp2 = "Group 1 is greater than group 2";
	static String FWGrp1LstGrp2 = "Group 1 is less than group 2";
	static String FWGrp1EqlGrp3 = "Group 1 is equal to group 3";
	static String FWGrp1GrtGrp3 = "Group 1 is greater than group 3";
	static String FWGrp1LstGrp3 = "Group 1 is less than group 3";
	static String FWGrp2EqlGrp1 = "Group 2 is equal to group 1";
	static String FWGrp2GrtGrp1 = "Group 2 is greater than group 1";
	static String FWGrp2LstGrp1 = "Group 2 is less than group 1";
	static String FWGrp2EqlGrp3 = "Group 2 is equal to group 3";
	static String FWGrp2GrtGrp3 = "Group 2 is greater than group 3";
	static String FWGrp2LstGrp3 = "Group 2 is less than group 3";
	static String FWGrp3EqlGrp2 = "Group 3 is equal to group 2";
	static String FWGrp3GrtGrp2 = "Group 3 is greater than group 2";
	static String FWGrp3LstGrp2 = "Group 3 is less than group 2";
	static String FWGrp3EqlGrp1 = "Group 3 is equal to group 1";
	static String FWGrp3GrtGrp1 = "Group 3 is greater than group 1";
	static String FWGrp3LstGrp1 = "Group 3 is less than group 1";
	static String[] FirstWeightGroup = {FWGrp1EqlGrp2, FWGrp1GrtGrp2, FWGrp1LstGrp2
			,FWGrp1EqlGrp3, FWGrp1GrtGrp3, FWGrp1LstGrp3
			,FWGrp2EqlGrp1, FWGrp2GrtGrp1, FWGrp2LstGrp1
			,FWGrp2EqlGrp3, FWGrp2GrtGrp3, FWGrp2LstGrp3
			,FWGrp3EqlGrp1, FWGrp3GrtGrp1, FWGrp3LstGrp1
			,FWGrp3EqlGrp2, FWGrp3GrtGrp2, FWGrp3LstGrp2};
	static String compareEqual = "Equal";
	static String compareLeft = "Left";
	static String compareRight = "Right";
	
	
	static int leftScale = 0;
	static int rightScale = 0;
	
	public static int getLeftScale() {
		return leftScale;
	}
	public static void setLeftScale(int leftScale) {
		Scale.leftScale = leftScale;
	}
	public static int getRightScale() {
		return rightScale;
	}
	public static void setRightScale(int rightScale) {
		Scale.rightScale = rightScale;
	}
	
	static Boolean isEqual = false, isLeft = false, isRight = false;
	
	public static Boolean getIsEqual() {
		return isEqual;
	}
	public static void setIsEqual(Boolean isEqual) {
		Scale.isEqual = isEqual;
	}
	public static Boolean getIsLeft() {
		return isLeft;
	}
	public static void setIsLeft(Boolean isLeft) {
		Scale.isLeft = isLeft;
	}
	public static Boolean getIsRight() {
		return isRight;
	}
	public static void setIsRight(Boolean isRight) {
		Scale.isRight = isRight;
	}
	public static void readyCompare() {
		Scale.isEqual = false;
		Scale.isLeft = false;
		Scale.isRight = false;
	}
	
	public static String getCompareResult(){
		if(Scale.getIsEqual()) {
			return Scale.compareEqual;
		}else if(Scale.getIsLeft()) {
			return Scale.compareLeft;
		}else if(Scale.getIsRight()) {
			return Scale.compareRight;
		}
		return null;
	}

}
