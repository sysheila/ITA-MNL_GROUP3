package com.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/removeWhite/{string}")
public class RemoveWhitespaceResource {
	
	@GET
	@Produces("text/plain")
	public String removeWhite(@PathParam("string") String string) {
		/*Scanner scan = new Scanner(System.in);
		System.out.println("Enter a word: ");
		String string = scan.nextLine();*/
		String pattern = "^[a-zA-Z]*$";
		String a = "Your string: " + string + '\n';
		String b = "After removing whitespace/non-english characters:";
		return  a + b + englishCharacters(string,pattern);
	}
	public static String englishCharacters(String string, String pattern) {
		string = string.replaceAll("\\s+",""); //whitespace
		string = string.replaceAll("[!@#$%^&\\*\\(\\)\\-\\+=_`~]",""); //symbols
		string = string.replaceAll("[0-9]",""); //numbers
		return string;
	}

}
