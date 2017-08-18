package com.oocl.dasmamo.sw;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;

public class SW_Files {
	static URL src = SW_Files.class.getClassLoader().getResource("input.txt");

	public static void main(String[] args) throws IOException {
		String a = src.getPath();
	
	//	String filename =  "C:/Users/dasmamo/Desktop/input.txt";
		ArrayList<String> al = new ArrayList<String>();
		String[]  ab = {"10",
		                "100",
		                "1000", "ABC", "10000", "BAC", "23"};
		//List<String> lines = new ArrayList<String>();
		String line = null;
		
		try {
			readAFile(a, line,al);
		//	writeAFile(al);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static void readAFile(String a2, String line, ArrayList<String> al) throws IOException {
	
		FileReader file = new FileReader(a2.toString());
		BufferedReader bf = new BufferedReader(file);
		ArrayList<Integer> ai = new ArrayList<Integer>();
		while((line = bf.readLine())!=null) {
			if(line.matches("[0-9]*")) {
				int a = Integer.parseInt(line);
				ai.add(a);
			}
			else {
				al.add(line);
			}
			
		}
		bf.close();
		Collections.sort(ai);
		Collections.sort(al);
		writeAFile(ai,al);
//		Collections.sort(al, Collator.getInstance());
	}
	
	public static void writeAFile(ArrayList<Integer> al, ArrayList<String> ai) throws IOException{
		FileWriter write = new FileWriter("src/test/resources/output.txt");
		for(int l : al) {
			write.write(l + "\r" + "\n");
			System.out.println(l);
		}
		for(String a : ai) {
			write.write(a + "\r" + "\n");
			System.out.println(a);
		}
		write.close();
	}
	
}