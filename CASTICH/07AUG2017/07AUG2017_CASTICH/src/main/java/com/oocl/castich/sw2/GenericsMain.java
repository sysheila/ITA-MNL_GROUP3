package com.oocl.castich.sw2;

import java.util.ArrayList;

public class GenericsMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<HolderClass> holderList = new ArrayList<HolderClass>();
		
		HolderClass holderClass1 = new HolderClass("A");
		HolderClass holderClass2 = new HolderClass("B");
		HolderClass holderClass3 = new HolderClass("C");
		
		holderList.add(holderClass1);
		holderList.add(holderClass2);
		holderList.add(holderClass3);
		
		for(HolderClass holderClass : holderList) {
			System.out.println(holderClass.getName());
		}
		
		
		GeneralClass<Integer> genClass = new GeneralClass<Integer>(new Integer(1), new Integer(2), new Integer(3));
		System.out.println(genClass.getA());
		System.out.println(genClass.getB());
		System.out.println(genClass.getC());

	}

}
