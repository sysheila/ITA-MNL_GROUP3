package com.oocl.dasmamo.hw;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class HW8_ArrayManipulation {
	static ArrayList<String> arrayEng= new ArrayList<String>();
	static ArrayList<String> arrayMix= new ArrayList<String>();
	static Scanner scan1 = new Scanner(System.in);
	static Scanner scan2 = new Scanner(System.in);
	static Scanner scan3 = new Scanner(System.in);
	public static void main(String[] args) throws IOException {

		arrayEng.add("a");
		arrayEng.add("abc");
		arrayEng.add("a");
		arrayEng.add("cde");
		arrayEng.add("fgh");
		
		
		while(true) {
			System.out.println("----------------------");
			System.out.println("1] View Array English");
			System.out.println("2] Remove duplicates of array english");
			System.out.println("3] Add item to english array");
			System.out.println("4] Add item to mixed array");
			System.out.println("5] Remove duplicates of mixed array");
			System.out.println("6] View mixed array");
			System.out.println("Enter option: ");
			int option = scan1.nextInt();
			if(option==1) {
				if(arrayEng.size()!=0) {
					for(String s : arrayEng) {
						System.out.println(s);
					}
				}
				else {
					System.out.println("ArrayList is empty!");
				}
			}
			else if(option==2) {
				Set<String> hs = new HashSet<>();
				hs.addAll(arrayEng);
				arrayEng.clear();
				arrayEng.addAll(hs);
			}
			else if(option==3) {
				String s = scan2.nextLine();
				arrayEng.add(s);
			}
			else if(option==4) {
				String s = scan3.nextLine();
				arrayMix.add(s);
			}
			else if(option==5) {
				Set<String> hs = new HashSet<>();
				hs.addAll(arrayMix);
				arrayMix.clear();
				arrayMix.addAll(hs);
			}
			else if(option==6) {
				if(arrayMix.size()!=0) {
					for(String s : arrayMix) {
						System.out.println(s);
					}
				}
				else {
					System.out.println("ArrayList is empty!");
				}
			}
		}
		
	}

}
