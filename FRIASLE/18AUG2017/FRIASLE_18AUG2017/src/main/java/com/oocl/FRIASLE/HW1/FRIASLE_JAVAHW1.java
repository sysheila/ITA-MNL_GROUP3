package com.oocl.FRIASLE.HW1;

import java.io.File;
import java.io.FilenameFilter;
import java.util.Arrays;

public class FRIASLE_JAVAHW1 {

	public static void main(String[] args) {
		File dir = new File(".//src//main//java//com//oocl//FRIASLE//HW1");
		String[] directories = dir.list(new FilenameFilter() {
			public boolean accept(File current, String name) {
				return new File(current, name).isDirectory();
			}
		});
		
		File file = new File(".//src//main//java//com//oocl//FRIASLE//HW1");
		String[] files = dir.list(new FilenameFilter() {
			public boolean accept(File current, String name) {
				return new File(current, name).isFile();
			}
		});
		
		System.out.println("Total directory number: " + directories.length);
		System.out.println(Arrays.toString(directories));
		
		System.out.println("Total file number: " + files.length);
		System.out.println(Arrays.toString(files));
	}

}
