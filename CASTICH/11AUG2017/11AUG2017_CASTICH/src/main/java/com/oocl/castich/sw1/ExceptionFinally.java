package com.oocl.castich.sw1;

import java.util.Scanner;

public class ExceptionFinally {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		System.out.println("Enter a number to convert to int: ");
		String toInt = s.nextLine();
		
		try {
			int i = Integer.parseInt(toInt);
		}
		
		catch(Exception e) {
			System.out.println("Something that should never have happened, happened.");
		}
		
		finally {
			System.out.println("It is done.");
		}
	}

}
