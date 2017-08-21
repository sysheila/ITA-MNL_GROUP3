package com.oocl.castich.hw8;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ArrayListDuplicate {

	public static void main(String[] args) {
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
		stringList.add("汉字");
		stringList.add("汉字");
		
		Collections.sort(stringList);
		System.out.println("String ArrayList with duplicates:\n");
		for(String string : stringList) {
			System.out.println(string);
		}
		
		Set<String> stringSet = new HashSet<String>();
		stringSet.addAll(stringList);
		stringList.clear();
		stringList.addAll(stringSet);

		Collections.sort(stringList);
		
		System.out.println("\n");
		System.out.println("String ArrayList with Duplicates removed:\n");
		for(String string : stringList) {
			System.out.println(string);
		}
		
	}
	
}
