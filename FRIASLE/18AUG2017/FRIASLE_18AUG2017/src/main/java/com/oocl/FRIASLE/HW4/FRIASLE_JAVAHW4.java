package com.oocl.FRIASLE.HW4;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FRIASLE_JAVAHW4 {
	static List<String> x = new ArrayList<String>();

	public static void main(String[] args) {
		try {
			// Create new file
			String content = "asdasd";
			String path = ".//src//main//java//com//oocl//FRIASLE//HW4//a.txt";
			File file = new File(path);

			// If file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			FileWriter fw = new FileWriter(file.getAbsoluteFile());
			BufferedWriter bw = new BufferedWriter(fw);

			// Write in file
			bw.write(content);

			// Close connection
			bw.close();

		} catch (Exception e) {
			System.out.println(e);
		}

		try {

			File file = new File(".//src//main//java//com//oocl//FRIASLE//HW4//a.txt");

			FileReader fileReader = new FileReader(file);

			BufferedReader bufferedReader = new BufferedReader(fileReader);

			StringBuffer stringBuffer = new StringBuffer();

			String line;

			while ((line = bufferedReader.readLine()) != null) {

				x.add(line);

			}

			fileReader.close();

			System.out.println("Contents of file:");

			System.out.println(stringBuffer.toString());

		} catch (IOException e) {

			e.printStackTrace();

		}
		
		try {
			// Create new file
			String content = x.toString();
			String path = ".//src//main//java//com//oocl//FRIASLE//HW4//output.txt";
			File file = new File(path);

			// If file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			FileWriter fw = new FileWriter(file.getAbsoluteFile());
			BufferedWriter bw = new BufferedWriter(fw);

			// Write in file
			bw.write(content);

			// Close connection
			bw.close();

		} catch (Exception e) {
			System.out.println(e);
		}
	}
}