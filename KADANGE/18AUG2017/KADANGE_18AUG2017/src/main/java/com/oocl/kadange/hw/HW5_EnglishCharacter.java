package com.oocl.kadange.hw;

public class HW5_EnglishCharacter {

	public static void main(String[] args) {
		String word= "@!#DSFdssv sdasf 12323 ,.{}:?>";
		String newWord = nonEnglishCharStripper(word);
		System.out.println(newWord);
	}
	
	public static String nonEnglishCharStripper(String word) {
		String regex = "[0-9\\W_]";
		String newWord = "";
		for(int i=0; i<word.length(); i++) {
			String a = word.substring(i, (i+1));
			if(!a.matches(regex)) {
				newWord += a;
			}
		}
		
		return newWord;
	}

}
