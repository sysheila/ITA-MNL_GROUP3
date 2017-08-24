package com.oocl.daluplo.sw4;

import java.util.Scanner;
import java.util.regex.Pattern;

public class RegexSampleCode {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String username = "";
		String password =""; 
		Scanner scan = new Scanner(System.in);
		System.out.println("Please enter username: ");
		username = scan.nextLine();
		System.out.println("Please enter password with A-Z, a-z and 0-9");
		password = scan.nextLine();
		if (!(Pattern.matches("^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$", password))) {
			System.out.println("Invalid Input!");
		}
		System.out.println("Welcome, " + username);

	}

}
