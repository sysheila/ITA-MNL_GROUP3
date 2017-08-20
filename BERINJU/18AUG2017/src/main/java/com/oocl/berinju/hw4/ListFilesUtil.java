package com.oocl.berinju.hw4;

import java.io.File;
import java.util.ArrayList;

public class ListFilesUtil {
	
    ArrayList<File> flist = new ArrayList<File>();
    ArrayList<File> dlist = new ArrayList<File>();
	 public void listFilesAndFilesSubDirectories(String directoryName){
	        File directory = new File(directoryName);
	        //get all the files from a directory
	        File[] list = directory.listFiles();

	        
	        for (File file : list){
	            if (file.isFile()){
	            	flist.add(file);
	                //System.out.println(file.getAbsolutePath());
	                
	            } else if (file.isDirectory()){
	            	dlist.add(file);
	                listFilesAndFilesSubDirectories(file.getAbsolutePath());
	            }
	        }
	        
	    }
}
