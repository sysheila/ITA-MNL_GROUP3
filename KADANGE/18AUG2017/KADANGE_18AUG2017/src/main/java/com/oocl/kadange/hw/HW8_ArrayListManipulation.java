package com.oocl.kadange.hw;

import java.util.ArrayList;
import java.util.Collections;

public class HW8_ArrayListManipulation {

	public static void main(String[] args) {
		ArrayList<String> arrayList = new ArrayList<String>();
		for(int i=1; i<5; i++) {
			if(i==3) {
				arrayList.add("Test"+(i-1));
			}
			arrayList.add("Test"+i);
		}
		System.out.println(arrayList.toString());
		ArrayList<String> newArrayList = removeDuplicate(arrayList);
		System.out.println(newArrayList.toString());
	}
	
	public static ArrayList<String> removeDuplicate(ArrayList<String> arrayList) {
		ArrayList<String> newArrayList = new ArrayList<String>();
		Collections.sort(arrayList);
		for(int i=0; i<arrayList.size(); i++) {
			Boolean isExist=false;
			if(newArrayList.isEmpty()) {
				newArrayList.add(arrayList.get(i));
			}else {
				for(int x=0; x<newArrayList.size(); x++) {
					if(newArrayList.get(x).equals(arrayList.get(i))) {
						isExist=true;
					}
				}
				if(!isExist) {
					newArrayList.add(arrayList.get(i));
				}
			}
		}
		
		return newArrayList;
	}

}
