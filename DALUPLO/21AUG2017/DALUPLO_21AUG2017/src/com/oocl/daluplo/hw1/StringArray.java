package com.oocl.daluplo.hw1;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/cleanArray")
public class StringArray {

	@GET
	@Produces("text/plain")
	public String cleanString() {
		ArrayList<String> stringArr = new ArrayList<String>();
		
		stringArr.add("Frodo");
		stringArr.add("Sam");
		stringArr.add("Pippin");
		stringArr.add("Merry");
		stringArr.add("Legolas");
		stringArr.add("Aragorn");
		stringArr.add("Frodo");
		stringArr.add("Sam");
		stringArr.add("Gandalf");
		stringArr.add("漢字");
		stringArr.add("漢字");
		stringArr.add("Sam");
		stringArr.add("Gandalf");
		
		Set<String> stringSet = new HashSet<String>(stringArr);
		StringBuilder strbld = new StringBuilder();
		for(String str:stringSet) {
			System.out.println(str);
			strbld.append(str+"\n");
		}
		return strbld.toString();
		
		
	}
}


