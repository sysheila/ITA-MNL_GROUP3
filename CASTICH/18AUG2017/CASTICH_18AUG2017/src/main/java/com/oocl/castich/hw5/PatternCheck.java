package com.oocl.castich.hw5;

import java.util.Scanner;

public class PatternCheck {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		System.out.print("Enter a string:");
		String string = s.nextLine();
		//汉字
		string = string.replaceAll("[^\\x00-\\x7F]", "");
		System.out.println("Output: "+string.replaceAll("[\\s]",""));
		
	}

}
