package com.oocl.kadange.sw;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class FileReadWrite {
	static BufferedWriter writer = null;
	
	public static File writeFile(String[] input){
		File fileA = new File("D:\\1 GENE_ITA\\3 RepositoryList\\ITA-MNL_GROUP3\\KADANGE\\18AUG2017\\NONJAVA\\fileA.txt");
		
		try {
			//Create file A
			fileA.createNewFile();
			writer = new BufferedWriter(new FileWriter(fileA));
			//Write into file
			for(int i=0; i<input.length; i++){
				writer.write(input[i]+"\n");
			}
		} catch (IOException e) {
			e.printStackTrace();
		}finally{
			try {
				writer.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return fileA;
	}
	
	public static File sortFile(File file){
		File fileB = new File("D:\\1 GENE_ITA\\3 RepositoryList\\ITA-MNL_GROUP3\\KADANGE\\18AUG2017\\NONJAVA\\fileB.txt");
		try {
			//Create file B
			fileB.createNewFile();
			//Reads file A
			List<String> input = Files.readAllLines(Paths.get("D:\\1 GENE_ITA\\3 RepositoryList\\ITA-MNL_GROUP3\\KADANGE\\18AUG2017\\NONJAVA\\fileA.txt"));
			ArrayList<Integer> num = new ArrayList<Integer>();
			ArrayList<String> let = new ArrayList<String>();
			for(int x=0; x<input.size(); x++){
				if(input.get(x).matches("[0-9]")){
					num.add(Integer.parseInt(input.get(x)));
				}else{
					let.add(input.get(x));
				}
			}
			//Sorting file A
			Collections.sort(num);
			Collections.sort(let);
			
			ArrayList<String> output = new ArrayList<String>();
			for(int i=0;i<num.size();i++){
				output.add(num.get(i).toString());
			}
			for(int i=0;i<let.size();i++){
				output.add(let.get(i));
			}
			
			//Writing to file B
			writer = new BufferedWriter(new FileWriter(fileB));
			for(int x=0; x<output.size(); x++){
				writer.write(output.get(x)+"\n");
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			try {
				writer.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return fileB;
	}
	
	public static void readFile(){
		
	}

}
public class SW1_MainApp extends FileReadWrite{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//String[] input = {"Hello","Hellow","Hellooowww"};
		String[] input = {"2","1","5","4","3","A","ABC","BCD","AFG","AAF","B","abc","10"};
		File fileA = writeFile(input);
		sortFile(fileA);
	}

}
