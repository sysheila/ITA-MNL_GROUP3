package com.oocl.berinju.hw8;


import java.util.ArrayList;
import java.util.stream.Collectors;

public class ArrayDuplicate {

	public static void main(String[] args) {
		ArrayList<String> list= new ArrayList<String>();
		list.add("Dog");
		list.add("Dog");
		list.add("你好");
		list.add("你好");
		list.add("Dog");
		list.add("Cat");
		System.out.println("Original List: ");
		for(String str : list) {
			System.out.println(str);
		}
		System.out.println("Filtered List: ");
		list = (ArrayList<String>) list.stream().distinct().collect(Collectors.toList());
		for(String str : list) {
			System.out.println(str);
		}
	}
}