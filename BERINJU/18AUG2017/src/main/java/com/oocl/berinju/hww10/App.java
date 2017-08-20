package com.oocl.berinju.hww10;

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

public class App {


	public static void main(String[] args) throws Exception {
		 URL url;
		 Scanner scan = new Scanner(System.in);
		 String s;
		  try {
			System.out.println("URL (https://www.example.com) : ");
			s=scan.nextLine();
		   url = new URL(s);
		   URLConnection conn = url.openConnection();
		   BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		   String inputLine;

		   File file = new File("src/main/java/com/oocl/berinju/hww10/output.doc");
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

		   System.out.println("Finished");

		  } catch (MalformedURLException e) {
		   e.printStackTrace();
		  } catch (IOException e) {
		   e.printStackTrace();
		  }
	}
}
