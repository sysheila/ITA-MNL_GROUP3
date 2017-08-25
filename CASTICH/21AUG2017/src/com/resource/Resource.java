package com.resource;

import java.io.File;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;


@Path("/hw")
public class Resource {

	@GET
	@Produces("text/plain")
	public String hw() {
		
		StringBuilder result = new StringBuilder();
		List<String> stringList = new ArrayList<String>();
		
		stringList.add("Yellow");
		stringList.add("Yellow");
		stringList.add("Orange");
		stringList.add("Red");
		stringList.add("Black");
		stringList.add("White");
		stringList.add("Black");
		stringList.add("Red");
		stringList.add("Pink");
		
		Collections.sort(stringList);
		System.out.println("String ArrayList with duplicates:\n");
		result.append("String ArrayList with duplicates:\n\n");
		for(String string : stringList) {
			System.out.println(string);
			result.append(string+"\n");
		}
		
		Set<String> stringSet = new HashSet<String>();
		stringSet.addAll(stringList);
		stringList.clear();
		stringList.addAll(stringSet);

		Collections.sort(stringList);
		
		System.out.println("\n");
		System.out.println("String ArrayList with Duplicates removed:\n");
		result.append("\nString ArrayList with Duplicates removed:\n\n");
		for(String string : stringList) {
			System.out.println(string);
			result.append(string+"\n");
		}
		result.append("\n\n");
		
		result.append("Directory: C:\\Users\n");
		String path = "C:\\users";
		
		result.append(listFilesAndDirectories(path));
		
		return result.toString();
	}
	
	public String listFilesAndDirectories(String directoryName){
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
        
        String result = print(fileList, fileCounter, directoryList, directoryCounter);
        return result;
    }
    
	 public String print(List<String> files, int fileCount, List<String> directories, int directoryCount) {
    	StringBuilder result = new StringBuilder();
    	System.out.println("\nNumber of directories: "+ directoryCount);
    	result.append("\nNumber of directories: "+ directoryCount+"\n\n");
    	for(String directory : directories) {
    		System.out.println(directory);
    		result.append(directory+"\n");
    	}  	
    	System.out.println("\nNumber of files: "+ fileCount);
    	result.append("\nNumber of files: "+ fileCount+"\n\n");
    	for(String file : files) {
    		System.out.println(file);
    		result.append(file+"\n");
    	}
    	return result.toString();
    }
}
