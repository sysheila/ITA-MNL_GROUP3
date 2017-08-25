package com.oocl.kadange.sw;

public class SW2_StringHelper {
	
	public String truncateAInFirst2Positions(String str){
		if(str.length() <= 2){
			return str.replaceAll("A", "");
		}
		String first2Char = str.substring(0, 2);
		String StringMinusFirst2Char = str.substring(2);
		return first2Char.replaceAll("A", "")+StringMinusFirst2Char;
	}
	
	public Boolean areFirstAndLastTwoCharactersTheSame(String str){
		if(str.length() <= 1)
			return false;
		if(str.length() == 2)
			return true;
		
		String first2Chars = str.substring(0, 2);
		String last2Chars = str.substring(str.length() - 2);
		
		return first2Chars.equals(last2Chars);
	}

}
