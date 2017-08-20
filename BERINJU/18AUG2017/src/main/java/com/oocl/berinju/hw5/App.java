package com.oocl.berinju.hw5;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		String st = scan.nextLine();
		st = st.replaceAll("\\s","");
		st = st.replaceAll("[^\\p{ASCII}]","");
		System.out.println(st);
	}

}
