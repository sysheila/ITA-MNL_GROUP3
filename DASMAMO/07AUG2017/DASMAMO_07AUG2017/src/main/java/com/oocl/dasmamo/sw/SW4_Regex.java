package com.oocl.dasmamo.sw;

import java.util.Scanner;

public class SW4_Regex {

	public static void main(String[] args) {
		String email = ".+@.+\\.com";
		String password = ".*{8,}(.*[a-z])*(.*[A-Z])*(.*[0-9])*(.*[@#$%^&+=])*";
		// String password = "((.*[a-z])*(.*[A-Z])*(.*[0-9])*(.*[@#$%^&+=])*).{6,}";
		/*
		 * //name System.out.println("Enter your name: "); Scanner scan1 = new
		 * Scanner(System.in); String name = scan1.nextLine();
		 * 
		 * //email address; while (true) {
		 * System.out.println("Enter your email address: "); Scanner scan = new
		 * Scanner(System.in); String emailScan = scan.nextLine();
		 * 
		 * if (emailScan.matches(email)) { //
		 * System.out.println(emailScan.matches(email)); break; } else {
		 * System.out.println("Invalid! "); } }
		 */
		// password
		while (true) {
			System.out.println("Enter your password: ");
			Scanner scan = new Scanner(System.in);
			String passScan = scan.nextLine();

			if (passScan.matches(password)) {
				// System.out.println(passScan.matches(password));
				break;
			} else {
				System.out
						.println("Invalid!Enter atleast one uppercase, one lowercase and one number and 6 characters");
			}
		}

	}

}