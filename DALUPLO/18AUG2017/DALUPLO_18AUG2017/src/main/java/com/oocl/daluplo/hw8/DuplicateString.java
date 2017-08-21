package com.oocl.daluplo.hw8;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class DuplicateString {
	public static void main(String[] args) {
		ArrayList<String> stringArr = new ArrayList<String>();
		
		stringArr.add("Frodo");
		stringArr.add("Sam");
		stringArr.add("Pippin");
		stringArr.add("Merry");
		stringArr.add("Legolas");
		stringArr.add("Aragorn");
		stringArr.add("Frodo");
		stringArr.add("Sam");
		stringArr.add("Gandalf");
		stringArr.add("漢字");
		stringArr.add("漢字");
		stringArr.add("Sam");
		stringArr.add("Gandalf");
		
		Set<String> stringSet = new HashSet<String>(stringArr);
		for(String str:stringSet) {
			System.out.println(str);
		}
		 
		
		
	}
	

}
