package com.oocl.dasmamo.hw;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class HW7_CopyAndCreateFile {
	static String copyTo;
	static String contents;
	public static void main(String[] args) throws IOException {
		com.sun.security.auth.module.NTSystem NTSystem = new com.sun.security.auth.module.NTSystem();
		String directory = "C:\\Users\\" + NTSystem.getName() + "\\Desktop\\output.txt";
		String copyTo = "C:\\Users\\" + NTSystem.getName() + "\\Desktop\\copied.txt";
		Scanner scan = new Scanner(System.in);
		System.out.println("What to write?: ");
		contents = scan.nextLine();
		writeFile(contents,directory);
		copyTo(copyTo,contents,directory);
	}
	
	public static void writeFile(String contents, String directory) throws IOException {
		File file = new File(directory);
		FileWriter fw = new FileWriter(file);
		file.getParentFile().mkdirs(); 
		try {
			file.createNewFile();
			BufferedWriter bw = new BufferedWriter(fw);
			bw.write(contents);
			System.out.println("File created in your Desktop!");
			bw.close();
			fw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}finally {
		}
	}
	public static void copyTo(String copyTo, String contents, String directory) throws IOException {
		ArrayList<String> arr = readAFile(directory);
		try(FileWriter fw = new FileWriter(copyTo, true);
			    BufferedWriter bw = new BufferedWriter(fw);
			    PrintWriter out = new PrintWriter(bw))
			{
			for(String s: arr) 
			{
				out.println(s);
			}
			out.close();
			    
			} catch (IOException e) {
			   System.out.println("Cannot write!");
			}
		
	}
	
	public static ArrayList<String> readAFile(String directory) throws IOException {
		String line = null;
		FileReader file = new FileReader(directory);
		BufferedReader bf = new BufferedReader(file);
		ArrayList<String> al = new ArrayList<String>();
		while((line = bf.readLine())!=null) {
				al.add(line);
		}
		bf.close();
		return al;
	}
}
