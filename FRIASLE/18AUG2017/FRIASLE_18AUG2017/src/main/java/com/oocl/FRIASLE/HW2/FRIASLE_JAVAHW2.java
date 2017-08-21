package com.oocl.FRIASLE.HW2;

import java.util.Scanner;

public class FRIASLE_JAVAHW2 {

	public static void main(String[] args) {
		System.out.println("Enter String:");
		Scanner scan = new Scanner(System.in);
		String x = scan.nextLine();
		
		x = x.replaceAll("\\s","");
		x = x.replaceAll("[^a-zA-Z0-9]", "");
		System.out.println(x);
	}

}
