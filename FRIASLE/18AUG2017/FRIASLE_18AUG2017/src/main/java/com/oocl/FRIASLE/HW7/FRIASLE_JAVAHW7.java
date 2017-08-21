package com.oocl.FRIASLE.HW7;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class FRIASLE_JAVAHW7 {

	static List<String> x = new ArrayList<String>();

	public static void main(String[] args) {

		URL url;
		InputStream is = null;
		BufferedReader br;
		String lineRead;

		try {
			url = new URL("http://cn.bing.com/");
			is = url.openStream(); // throws an IOException
			br = new BufferedReader(new InputStreamReader(is));
			
			
			String DLpath = ".//src//main//java//com//oocl//FRIASLE//HW7//input";
			File file = new File(DLpath);
			
			file.delete();
			if (!file.exists()) {
				file.createNewFile();
			}
			
			
			FileWriter fwDL = new FileWriter(file.getAbsoluteFile(), true);
			BufferedWriter bwDL = new BufferedWriter(fwDL);



			while ((lineRead = br.readLine()) != null) {
				System.out.println(lineRead);
				// Write in file
				bwDL.write(lineRead);				
			}
			
			bwDL.close();
		} catch (MalformedURLException mue) {
			mue.printStackTrace();
		} catch (IOException ioe) {
			ioe.printStackTrace();
		} finally {
			try {
				if (is != null)
					is.close();
			} catch (IOException ioe) {
				// nothing to see here
			}
		}

		try {

			File file = new File(".//src//main//java//com//oocl//FRIASLE//HW7//input");

			FileReader fileReader = new FileReader(file);

			BufferedReader bufferedReader = new BufferedReader(fileReader);

			StringBuffer stringBuffer = new StringBuffer();

			String line;

			while ((line = bufferedReader.readLine()) != null) {

				x.add(line);

			}

			fileReader.close();

			System.out.println(stringBuffer.toString());

		} catch (IOException e) {

			e.printStackTrace();

		}

		try {
			// Create new file
			String content = x.toString();
			String path = ".//src//main//java//com//oocl//FRIASLE//HW7//output";
			File file = new File(path);

			// If file doesn't exists, then create it
			if (!file.exists()) {
				file.createNewFile();
			}

			FileWriter fw = new FileWriter(file.getAbsoluteFile(), true);
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
