package com.oocl.kadange.hw;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Scanner;

public class HW8_ArrayListManipulation {

	public static void main(String[] args) {
		//Get inputs
		ArrayList<String> words = getInput();
		System.out.println(words.toString());
		
		//Remove duplicates
		ArrayList<String> newArrayList = removeDuplicate(words);
		System.out.println(newArrayList.toString());
	}
	
	private static ArrayList<String> inputWords(int numOfWords){
		ArrayList<String> wordList = new ArrayList<String>();
		Scanner sc = new Scanner(System.in);
		for(int i=0;i<numOfWords; i++) {
			System.out.print("Enter word number "+(i+1)+": ");
			String word="";
			try {
				word = new String(sc.nextLine().getBytes(), "UTF-8");
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			wordList.add(word);
		}
		return wordList;
	}
	
	private static ArrayList<String> getInput() {
		ArrayList<String> inputs = new ArrayList<String>();
		
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter number of words: ");
		if(sc.hasNextInt()) {
			int numWords = sc.nextInt();
			inputs = inputWords(numWords);
		}else {
			String input = sc.nextLine();
			if(!input.toLowerCase().equals("exit")) {
				System.out.println("Input is not a number. \nEnter \"exit\" to exit the program.");
				inputs = getInput();
			}
		}
		return inputs;
	}
	
	public static ArrayList<String> removeDuplicate(ArrayList<String> arrayList) {
		ArrayList<String> newArrayList = new ArrayList<String>();
		//Collections.sort(arrayList);
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
