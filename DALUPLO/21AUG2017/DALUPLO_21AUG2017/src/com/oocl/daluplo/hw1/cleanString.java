package com.oocl.daluplo.hw1;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/cleanString")
public class cleanString {
	
	@GET
	@Produces("text/plain")
	public String cleanString2() {
		String input = "lalala noooo!!";
		input=input.replaceAll("[^\\p{ASCII}]", "");
		input=input.replaceAll("[\\s]", "");
		
		return input;
	}
}
