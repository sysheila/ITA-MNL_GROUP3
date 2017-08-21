package practice;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FRIASLE_SW1 {

	public static void main(String[] args) {

		List<String> x = new ArrayList<String>();
		List<Integer> y = new ArrayList<Integer>();
		List<String> z = new ArrayList<String>();
		List<String> finale = new ArrayList<String>();
		try {
			File file = new File(
					".\\src\\main\\java\\practice\\test.txt");
			FileReader fileReader = new FileReader(file);
			BufferedReader bufferedReader = new BufferedReader(fileReader);
			StringBuffer stringBuffer = new StringBuffer();
			String line;
			while ((line = bufferedReader.readLine()) != null) {
				if(isNumeric(line)) {
					y.add(Integer.parseInt(line));
				}
				else if (isSc(line)) {
					z.add(line);
				}
				else {
					x.add(line);
				}
				
			}
			fileReader.close();
			System.out.println("Contents of file:");
			System.out.println(stringBuffer.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		Collections.sort(y);
		Collections.sort(x);
		System.out.println("After sort: ");
		
//		for (int temp : y) {
//			System.out.println(temp);
//		}
//		for (String temp : x) {
//			System.out.println(temp);
//		}
		finale.addAll(x);
//		finale.addAll(y);
		finale.addAll(z);
		try {
			PrintStream out = new PrintStream(new FileOutputStream(
					".\\src\\main\\java\\practice\\test2.txt"));
			for (int temp : y) {
				out.println(temp);
			}
			for (String temp : x) {
				out.println(temp);
			}
			out.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static boolean isNumeric(String s) {
		return s != null && s.matches("[-+]?\\d*\\.?\\d+");
	}
	
	public static boolean isSc(String s) {
		return s != null && s.matches("[^A-Za-z0-9]");
	}

}
