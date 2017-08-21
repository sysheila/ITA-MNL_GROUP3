package com.oocl.daluplo.hw7;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class writeTxtFile {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		FileWriter fileWriter= null;
		FileReader  reader = null;
//		File file = new File(".\\src\\main\\resources\\text.txt");
		Scanner scanner = new Scanner(System.in);
		String newString="";
		
		try {
			String filename1= "./src/main/resources/text1.txt";
		    String filename2= "./src/main/resources/text.txt";
		    fileWriter = new FileWriter(filename2); 
		    reader = new FileReader(filename1);
		    int c = reader.read();
            while(c!=-1) {
            	fileWriter.write(c);
                c = reader.read();
            }
            fileWriter.close();
            System.out.println("Copying file...");
            System.out.println("Enter text to add:");
    		newString = scanner.nextLine();
            
		    fileWriter = new FileWriter(filename2,true); 
		    fileWriter.write("\n" + newString);
		    reader.close();
		    fileWriter.close();
		}catch(Exception e) {
			e.printStackTrace();
		}

	}

}
