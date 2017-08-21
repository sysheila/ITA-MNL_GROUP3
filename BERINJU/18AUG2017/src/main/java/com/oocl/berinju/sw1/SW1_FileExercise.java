package com.oocl.berinju.sw1;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class SW1_FileExercise {
	
	public static void main(String args[]){
		
		String[] hello;
		
		 try {
		        File input = new File("input.txt");
		        File output = new File("output.txt");
		        Scanner sc = new Scanner(input);
		        PrintWriter printer = new PrintWriter(output);

		        List<String> temps = new ArrayList<String>();

		        while (sc.hasNext()) {
		          String token1 = sc.next();
		          temps.add(token1);
		        }
		        Collections.sort(temps);
		        String[] tempArray = temps.toArray(new String[0]);
		      
		        for (String s : tempArray) {
		          System.out.println(s);
		          printer.println(s);
		        }
		        
		        printer.close();
		        sc.close();
		    }
		    catch(FileNotFoundException e) {
		        System.err.println("File not found");
		    }
	}
}
