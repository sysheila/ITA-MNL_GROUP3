package com.oocl.daluplo.hw5;

import java.io.File;
import java.util.Scanner;

public class RmString {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter String: ");
		String input = scanner.nextLine();
		input=input.replaceAll("[^\\p{ASCII}]", "");
		input=input.replaceAll("[\\s]", "");
		
		System.out.println(input);
		
		

	}

}
