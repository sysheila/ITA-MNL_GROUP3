package com.oocl.castich.hw4;


import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class FileDirectory {

    public void listFilesAndDirectories(String directoryName){
        File directory = new File(directoryName);
        
        File[] fList = directory.listFiles();
        
        List<String> fileList = new ArrayList<String>();
        List<String> directoryList = new ArrayList<String>();
        
        int fileCounter=0, directoryCounter=0;
        
        for (File file : fList){
            if (file.isFile()){
                fileList.add(file.getName());
                fileCounter++;
            } else if (file.isDirectory()){
                directoryList.add(file.getName());
                directoryCounter++;
            }
        }
        
        this.print(fileList, fileCounter, directoryList, directoryCounter);
    }
    
    public void print(List<String> files, int fileCount, List<String> directories, int directoryCount) {
    	System.out.println("\nNumber of directories: "+ directoryCount);    	
    	for(String directory : directories) {
    		System.out.println(directory);
    	}  	
    	System.out.println("\nNumber of files: "+ fileCount);
    	for(String file : files) {
    		System.out.println(file);
    	}
    }
    
    public static void main (String[] args){
    	Scanner s = new Scanner(System.in);
    	boolean finished = false;
    	while(!finished) {
        	System.out.print("Enter a directory: ");
        	String path = s.nextLine();
            FileDirectory listFilesUtil = new FileDirectory();
            try {
                listFilesUtil.listFilesAndDirectories(path);
                finished=true;
            }catch(Exception e) {
            	System.out.println("\nInvalid file directory entered. Try again.\n");
            	finished=false;
            }
    	}
    }
}
