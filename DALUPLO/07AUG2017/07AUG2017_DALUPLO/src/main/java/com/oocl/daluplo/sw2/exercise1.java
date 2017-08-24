package com.oocl.daluplo.sw2;

import java.awt.List;
import java.util.ArrayList;

public class exercise1 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		GenObj A = new GenObj("A");
		GenObj B = new GenObj("B");
		GenObj C = new GenObj("C");
		
		ArrayList<GenObj> objList = new ArrayList<GenObj>();
		
		objList.add(A);
		objList.add(B);
		objList.add(C);
		
		for(GenObj obj:objList) {
			System.out.println(obj.getName());
		}
		
		GenClass<String> obj = new  GenClass<String> ("a", "b","c");
		System.out.println(obj.getA());
		System.out.println(obj.getB());
		System.out.println(obj.getC());
	}
	
	
	

}
