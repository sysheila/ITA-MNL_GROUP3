package com.oocl.kadange.hw;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/stripNonEng")
public class HW1_NonLetterStripper {
	@GET
	@Produces("text/plain")
	@Path("/getEngChar/{word}")
	public String stripNonEng(@PathParam("word") String word) {
		//return "Hello";
		return "Input: "+word+"\nStripped word: "+nonEnglishCharStripper(word);
	}

	public static String nonEnglishCharStripper(String word) {
		String regex = "[0-9\\W_]";
		String newWord = "";
		for (int i = 0; i < word.length(); i++) {
			String a = word.substring(i, (i + 1));
			if (!a.matches(regex)) {
				newWord += a;
			}
		}

		return newWord;
	}

}
