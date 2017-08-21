package com.oocl.dasmamo.hw;

import java.util.Scanner;

public class HW5_EnglishOnly {

	public static void main(String[] args) {
		@SuppressWarnings("resource")
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter a word: ");
		String string = scan.nextLine();
		String pattern = "^[a-zA-Z]*$";
		englishCharacters(string,pattern);
	}
	//remove functions
	public static void englishCharacters(String string, String pattern) {
		string = string.replaceAll("\\s+",""); //whitespace
		string = string.replaceAll("[!@#$%^&\\*\\(\\)\\-\\+=_`~]",""); //symbols
		string = string.replaceAll("[0-9]",""); //numbers
		System.out.println(string);
	}
}
