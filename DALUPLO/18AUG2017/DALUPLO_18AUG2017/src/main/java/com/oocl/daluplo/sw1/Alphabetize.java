package com.oocl.daluplo.sw1;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Alphabetize {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BufferedReader br = null;
		FileReader file = null;
		FileWriter output = null;
		BufferedWriter writer = null;
		FileWriter output2 = null;
		BufferedWriter writer2 = null;
		List<String> stringArr = new ArrayList<String>();
		List<String> stringArr2 = new ArrayList<String>();
		List<Integer> intgArr = new ArrayList<Integer>();
		try {
			file = new FileReader(".\\src\\main\\resources\\input.txt");
			br = new BufferedReader(file); 
			output = new FileWriter(".\\src\\main\\resources\\output.txt");
			writer = new BufferedWriter(output);
			output2 = new FileWriter(".\\src\\main\\resources\\output2.txt");
			writer2 = new BufferedWriter(output2);
			String current;
			int curr;
			
			while ((current = br.readLine()) != null) {
				if(isNumeric(current)){
					intgArr.add(Integer.parseInt(current));
				}else {
					stringArr.add(current.toLowerCase());
				}
				stringArr2.add(current);
				
			}

			Collections.sort(stringArr);
			Collections.sort(intgArr);
			stringArr2.sort(new AlphanumComparator());
			
			for(Integer str2:intgArr) {
//				System.out.println(str2);
				writer.write(Integer.toString(str2));
				writer.newLine();
			}
			for(String str:stringArr) {
//				System.out.println(str);
				writer.write(str);
				writer.newLine();
			}
			
			for(String str2:stringArr2) {
//				System.out.println(str2);
				writer2.write(str2);
				writer2.newLine();
			}

		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			try {
				br.close();
				file.close();
				writer.close();
				writer2.close();
				output.close();
				output2.close();
			}catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public static boolean isNumeric(String str)  
	{  
	  try  
	  {  
	    Double.parseDouble(str);  
	  }  
	  catch(NumberFormatException nfe)  
	  {  
	    return false;  
	  }  
	  return true;  
	} 

}
