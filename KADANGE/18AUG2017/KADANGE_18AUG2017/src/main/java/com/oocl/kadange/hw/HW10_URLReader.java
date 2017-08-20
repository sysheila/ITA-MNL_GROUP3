package com.oocl.kadange.hw;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

public class HW10_URLReader {

	public static void main(String args[]) {
		String output = getUrlContents("http://localhost:8080/KADANGE_18AUG2017/HW_Javascript.jsp");
		System.out.println(output);
		createFile("D:\\","HTTPFile.html",output);
	}
	
	private static void createFile(String dir, String fileName, String msg) {
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
	}

	private static String getUrlContents(String theUrl) {
		StringBuilder content = new StringBuilder();

		// many of these calls can throw exceptions, so i've just
		// wrapped them all in one try/catch statement.
		try {
			// create a url object
			URL url = new URL(theUrl);

			// create a urlconnection object
			URLConnection urlConnection = url.openConnection();

			// wrap the urlconnection in a bufferedreader
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

			String line;

			// read from the urlconnection via the bufferedreader
			while ((line = bufferedReader.readLine()) != null) {
				content.append(line + "\n");
			}
			bufferedReader.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return content.toString();
	}

}
