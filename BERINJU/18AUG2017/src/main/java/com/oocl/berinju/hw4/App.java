package com.oocl.berinju.hw4;

import java.io.File;

public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		  ListFilesUtil listFilesUtil = new ListFilesUtil();
	        //Windows directory example
	        final String directoryWindows ="C://Users/Junno//git//ITA-MNL_Group3//BERINJU//18AUG2017//WebContent//WEB-INF";
	        listFilesUtil.listFilesAndFilesSubDirectories(directoryWindows);
	        
	        System.out.println("total file number : " + listFilesUtil.flist.size());
	        for(File f : listFilesUtil.flist){
	        	System.out.println(f.getAbsolutePath());
	        }
	        
	        System.out.println("total directory number : " + listFilesUtil.dlist.size());
	        for(File f : listFilesUtil.dlist){
	        	System.out.println(f.getAbsolutePath());
	        }
	}

}
