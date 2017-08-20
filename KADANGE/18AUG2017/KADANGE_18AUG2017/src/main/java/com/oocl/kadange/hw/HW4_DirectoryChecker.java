package com.oocl.kadange.hw;

import java.io.File;
import java.util.ArrayList;

class Directory{
	public static File[] getDirectory(String path) {
		File file = new File(path);
		if(file.isDirectory()) {
			return file.listFiles();
		}
		return null;
	}
	
	public static ArrayList<String> checkDirectory(File[] dir) {
		ArrayList<String> dirName = new ArrayList<String>();
		for(File file : dir) {
			if(file.isDirectory()) {
				dirName.add(file.getName());
			}
		}
		if(dirName.isEmpty() || dirName == null) {
			return null;
		}
		return dirName;
	}
	
	public static ArrayList<String> checkFiles(File[] dir) {
		ArrayList<String> fileName = new ArrayList<String>();
		for(File file : dir) {
			if(file.isFile()) {
				fileName.add(file.getName());
			}
		}
		if(fileName.isEmpty() || fileName == null) {
			return null;
		}
		return fileName;
	}
}

public class HW4_DirectoryChecker extends Directory{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//File number
		//File name
		//Directory number
		//Directory name
		File[] dir = getDirectory("C:\\Users\\Gene kadano\\Documents\\1 ITA Related\\Tools");
		ArrayList<String> directories = checkDirectory(dir);
		ArrayList<String> files = checkFiles(dir);
		
		System.out.println("Number of files: "+files.size());
		System.out.println("Name of files: "+files.toString());
		System.out.println("Number of directories: "+directories.size());
		System.out.println("Name of directories: "+directories.toString());
	}

}
