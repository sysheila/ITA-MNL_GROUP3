package com.oocl.dasmamo.hw;

import java.io.File;
import java.util.ArrayList;
import java.util.Scanner;

public class HW4_FileDirectory {
	static String filename;
	@SuppressWarnings({ "restriction", "resource" })
	public static void main(String[] args) {
	Scanner scan  = new Scanner(System.in);
	int option;
	com.sun.security.auth.module.NTSystem NTSystem = new com.sun.security.auth.module.NTSystem();
	System.out.println("Choose directory: ");
		while(true) {
			System.out.println("----------- OPTION -----------");
			System.out.println(" 1] Desktop");
			System.out.println(" 2] Documents");
			System.out.println(" 3] Others");
			System.out.println(" 4] End");
			option = scan.nextInt();
			if(option==1) {
				filename = "C:\\Users\\" + NTSystem.getName() + "\\Desktop";
			}
			else if(option==2) {
				filename = "C:\\Users\\" + NTSystem.getName() + "\\Documents";
			}
			else if(option==3){
				Scanner scan2 = new Scanner(System.in);
				System.out.println("Enter directory: ");
				filename = scan2.nextLine();
			}
			else if (option==4) {
				break;
			}
			else {
				System.out.println("Invalid option!");
			}
			try{
				countFilesAndFolders(filename);
			}catch(Exception e) {
				System.out.println("Invalid directory/not exists!");
			}
		}
	}
	
	public static void countFilesAndFolders(String filename) {
		int foldersCount = 0;
		int filesCount = 0;
		File file = new File(filename);
		File[] fileList = file.listFiles();
		ArrayList<String> folders = new ArrayList<String>();
		ArrayList<String> files = new ArrayList<String>();
		 if (file != null) {
			 for (int i = 0; i < fileList.length; i++) {
			        File f = fileList[i];
			        if (f.isDirectory()) {   
			             folders.add(f.getName());
			             foldersCount++;
			        }
			        else {
			        	files.add(f.getName());
			        	filesCount++;
			        }
			    }
			 if(filesCount==0 && foldersCount==0) {
				 System.out.println("No files/folders!");
			 }
			 else {
				 System.out.println("Directory: " + filename);
				    System.out.println("------------------------------");
				    System.out.println("Folder count: " + foldersCount);
				    System.out.println("------------------------------");
				    for(String s : folders) {
				    	System.out.println(s);
				    }
				    System.out.println("------------------------------");
				    System.out.println("Files count: " + filesCount);
				    System.out.println("------------------------------");
				    for(String s : files) {
				    	System.out.println(s);
				    }
			 }
		 }
		 
	}
}
