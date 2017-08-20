package com.oocl.dasmamo.hw;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.Scanner;

public class HW10_SaveHTMLDoc {

	public static void main(String[] args) throws Exception {
		 URL url;
		 Scanner scan = new Scanner(System.in);
		 String s;
		  try {
			System.out.println("Enter site: ");
			s=scan.nextLine();
		   // enter any url to get its content
		   url = new URL("https://" + s);
		   URLConnection conn = url.openConnection();

		   // open the stream and put it into BufferedReader
		   BufferedReader br = new BufferedReader(new InputStreamReader(
		     conn.getInputStream()));
		   String inputLine;

		   // save it anywhere in local machine for offline use
		   String fileName = "src/test/resources/test.doc";
		   File file = new File(fileName);
		   if (!file.exists()) {
		    file.createNewFile();
		   }

		   FileWriter fw = new FileWriter(file.getAbsoluteFile(),true);
		   BufferedWriter bw = new BufferedWriter(fw);

		   while ((inputLine = br.readLine()) != null) {
		    bw.write(inputLine);
		   }

		   bw.close();
		   br.close();

		   System.out.println("Your file is saved in " + fileName
		     + " location.");

		  } catch (MalformedURLException e) {
		   e.printStackTrace();
		  } catch (IOException e) {
		   e.printStackTrace();
		  }
	}
}
