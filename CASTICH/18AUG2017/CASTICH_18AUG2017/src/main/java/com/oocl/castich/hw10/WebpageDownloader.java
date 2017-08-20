package com.oocl.castich.hw10;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class WebpageDownloader {
	
	public static void main(String[] args) {
		
		URL url;
	    InputStream is = null;
	    BufferedReader br;
		BufferedWriter writer = null;
		FileWriter output = null;
	    String line, content="";
	    
	    try {
	        url = new URL("https://jsoup.org");
	        is = url.openStream();  // throws an IOException
	        br = new BufferedReader(new InputStreamReader(is));

	        while ((line = br.readLine()) != null) {
	            content+=line;
	        }
	    } 
	    catch (MalformedURLException mue) {
	         mue.printStackTrace();
	    }
	    catch (IOException ioe) {
	         ioe.printStackTrace();
	    }
	    finally {
	        try {
	            if (is != null) is.close();
	        } catch (IOException ioe) {
	            // nothing to see here
	        }
	    }
	    

		Document doc = Jsoup.parse(content); 
		String text = doc.body().text(); // "An example link"
		String projectPath = System.getProperty("user.dir");
		
		try {
			File outputFile = new File(projectPath+"\\src\\main\\resources","hw10_output.txt");
			output = new FileWriter(outputFile.getAbsolutePath(),true);
			
			writer = new BufferedWriter(output);
			writer.write(text);
			writer.close();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
