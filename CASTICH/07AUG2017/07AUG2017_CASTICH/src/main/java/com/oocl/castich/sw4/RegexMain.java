package com.oocl.castich.sw4;

public class RegexMain {

	public static void main(String args[]) {
		
		
		String matchEnd = ".*n$";
		String str = "sun";
		
		System.out.println(str.matches(matchEnd));
		
		String matchBegin = "^b.*";
		String str2 = "begin";
		
		System.out.println(str2.matches(matchBegin));
		
		String matchBeginEnd = "d.*k";
		String str3 = "duck";
		String str4 = "dock";
		String str5 = "demmarkc";
		
		System.out.println(str3.matches(matchBeginEnd)); 
		System.out.println(str4.matches(matchBeginEnd)); 
		System.out.println(str5.matches(matchBeginEnd)); 
		
		String matchDate = "[0-9]{2}-*[0-9]{2}-[0-9]{4}";
		String str6 = "04-16-1994";
		String str7 = "04-04-16-1994";
		
		System.out.println(str6.matches(matchDate));
		System.out.println(str7.matches(matchDate));
		
		String matchBetween = ".*dark.*";
		String str8 = "thedasrkknight";
		
		System.out.println(str8.matches(matchBetween));
		
		
		String matchRequirement = "^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$";
		String str9 = "Thewhiteknight1";
		
		System.out.println(str9.matches(matchRequirement));
	}
	
	
}
