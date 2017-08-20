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
		String output = getUrlContents("http://localhost:8080/KADANGE_18AUG2017/HW_Javascript.jsp");
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

		try {
			URL url = new URL(theUrl);
			URLConnection urlConnection = url.openConnection();
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

			String line="";
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
