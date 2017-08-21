package com.oocl.FRIASLE.HW5;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class FRIASLE_JAVAHW5 {
	public static void main(String[] args) {
		List<String> x = new ArrayList<String>();
		x.add("dup");
		x.add("dup");
		x.add("asdasd");
		x.add("asdq");
//		x.add("");
//		x.add("");
		
		
		System.out.println("Original:");
		for(String y : x) {
			System.out.println(y);
		}
		
		Set<String> hs = new HashSet<String>();
		hs.addAll(x);
		x.clear();
		x.addAll(hs);
		System.out.println("After removing duplicate:");
		for(String y : x) {
			System.out.println(y);
		}
	}

}
