package com.oocl.kadange.hw;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class HW7_Files {

	public static void main(String[] args) {
		copyFile(createFile("D:\\","fileA.txt","This is file A"),"fileB.txt");
	}
	
	public static void copyFile(File file, String fileName) {
		System.out.println(file.getParentFile());
		File fileB = new File(file.getParent()+"\\"+fileName);
		if(!fileB.exists()) {
			try {
				fileB.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter(fileB));
			List<String> inputs = Files.readAllLines(Paths.get(file.getAbsolutePath()));
			for(String input : inputs) {
				writer.write(input+"\n");
			}
			writer.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			
		}
	}
	
	public static File createFile(String dir, String fileName, String msg) {
		File fileA = new File(dir+fileName);
		if(!fileA.exists()) {
			try {
				fileA.createNewFile();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter(fileA));
			writer.write(msg);
			writer.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return fileA;
	}

}
