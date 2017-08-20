package com.oocl.kadange.hw;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class HW10_URLReader {

	public static void main(String args[]) {
		//String output = getUrlContents("http://localhost:8080/KADANGE_18AUG2017/HW_Javascript.jsp");
		String output = getUrlContents("file:///C:/Users/Gene%20kadano/Documents/1%20ITA%20Related/Repository/ITA-MNL_GROUP3/KADANGE/18AUG2017/NONJAVA/HW_SenchaProject/index.html");
		//System.out.println(output);
		createFile("D:\\","HTTPFile.html",output);
	}
	
	private static void createFile(String dir, String fileName, String msg) {
		File fileA = new File(dir+fileName);
		if(!fileA.exists()) {
			try {
				System.out.println("Creating file...");
				fileA.createNewFile();
				writeUrlContent(fileA, msg, null);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else {
			try {
				List<String> inputs = Files.readAllLines(Paths.get(fileA.getAbsolutePath()));
				writeUrlContent(fileA, msg, inputs);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	private static void writeUrlContent(File file, String newContent, List<String> oldContent) {
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter(file));
			if(oldContent != null && !oldContent.isEmpty()) {
				for(String input : oldContent) {
					writer.append(input+"\n");
				}
			}
			writer.append(newContent);
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
