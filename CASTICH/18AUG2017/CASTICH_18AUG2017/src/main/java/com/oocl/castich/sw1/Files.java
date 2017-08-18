package com.oocl.castich.sw1;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Files {
	
	public static void main(String[] args) {
		
		String path = "D:\\GIT\\ITA-MNL_GROUP3\\CASTICH\\18AUG2017\\CASTICH_18AUG2017\\src\\main\\resources\\file.txt";
		List<String> result = new ArrayList<String>();
		
		try {
			result.addAll(openFile(path));
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		for(String string : result) {
			System.out.println(string);
		}
		
	}
	
	public static List<String> openFile(String path) throws IOException{
		String current;
		FileReader fr = new FileReader(path);
		BufferedReader br = new BufferedReader(fr);
		List<Integer> intList = new ArrayList<Integer>();
		List<String> stringList = new ArrayList<String>();
		List<String> finalList = new ArrayList<String>();
		
		BufferedWriter writer = null;
		FileWriter output = null;
		
		try {
			output = new FileWriter("D:\\GIT\\ITA-MNL_GROUP3\\CASTICH\\18AUG2017\\CASTICH_18AUG2017\\src\\main\\resources\\output.txt");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		writer = new BufferedWriter(output); 
		
		while((current = br.readLine())!=null) {
			if(isNumeric(current)) {
				intList.add(Integer.parseInt(current));
				continue;
			}
			stringList.add(current);
		}
		Collections.sort(intList);
		Collections.sort(stringList);
		
		for(Integer i: intList) {
			writer.write(Integer.toString(i));
			writer.newLine();
			finalList.add(i.toString());
		}
		
		for(String str: stringList) {
			writer.write(str);
			writer.newLine();
		} 
		finalList.addAll(stringList);
		writer.close();
		return finalList;
	}
	
	public static void writeFile(String path) {
		try {
			FileWriter fw = new FileWriter(path, true);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static boolean isNumeric(String str){  
	  try  
	  {  
	    double d = Double.parseDouble(str);  
	  }  
	  catch(NumberFormatException nfe)  
	  {  
	    return false;  
	  }  
	  return true;  
	}
}
