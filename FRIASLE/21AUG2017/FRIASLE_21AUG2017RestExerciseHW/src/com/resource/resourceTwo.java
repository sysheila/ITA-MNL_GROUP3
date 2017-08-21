package com.resource;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/getResourceTwo")
public class resourceTwo {
	static List<String> x = new ArrayList<String>();

	@GET
	@Produces("text/plain")
	public String hello() {
		

		System.out.println("Input String is: dasohjkh askdhha jshhjk %^&%$$%&$ asd");
		String x = "dasohjkh askdhha jshhjk %^&%$$%&$ asd";
		String y = x;
		x = x.replaceAll("\\s","");
		x = x.replaceAll("[^a-zA-Z0-9]", "");
		System.out.println(x);
	
		
		return "Original Txt: "+ y + "\nConverted text is: " +x;
	}
}
