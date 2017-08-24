package com.oocl.FRIASLE.SW;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Regex {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter Username");
		String y = scan.nextLine();

		System.out.println("Enter Password");
		String x = scan.nextLine();

		Regex reg = new Regex();

		boolean fel = reg.validate(x);
		if (fel) {
			System.out.println("username is " + y + "\nPassword is " + x);
		} else {
			System.out.println("Password doesn't match validation");
		}

	}

	private Pattern pattern;
	private Matcher matcher;

	private static final String PASSWORD_PATTERN = "((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})";

	public Regex() {
		pattern = Pattern.compile(PASSWORD_PATTERN);
	}

	/**
	 * Validate password with regular expression
	 * 
	 * @param password
	 *            password for validation
	 * @return true valid password, false invalid password
	 */
	public boolean validate(final String password) {

		matcher = pattern.matcher(password);
		return matcher.matches();

	}

}
