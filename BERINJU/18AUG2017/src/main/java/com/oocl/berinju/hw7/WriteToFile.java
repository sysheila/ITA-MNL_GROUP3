package com.oocl.berinju.hw7;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.text.Collator;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.util.stream.Stream;

public class WriteToFile {

	private static final String FILEPATH = "src/main/java/com/oocl/berinju/hw7/open.txt";
	public static void main(String[] args) {
		try {
			FileOutputStream fop = new FileOutputStream(FILEPATH);
					byte[] contentInBytes = (FILEPATH).getBytes();
					fop.write(contentInBytes);
					fop.flush();
					fop.close();
					Files.write(Paths.get("src/main/java/com/oocl/berinju/hw7/output.txt"), contentInBytes, StandardOpenOption.APPEND);
		} catch (IOException e) {

			e.printStackTrace();

		}
		
	}

}
