package com.oocl.daluplo.hw9;

import java.io.IOException;
import java.util.Scanner;

public class ExecuteProgram {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Runtime runner = Runtime.getRuntime();
		Scanner scanner = new Scanner(System.in);
		String program ="";
	    try {
	    	System.out.println("Enter Program to run: ");
	    	program = scanner.nextLine().toLowerCase();
	    	runner.exec(program);
	    }
	    catch (IOException e) {
	      System.out.println(e);
	    }   
	}

}
