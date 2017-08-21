package com.resource;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/resourceOne")
public class resourceOne {
	@GET
	@Produces("text/plain")
	public String OpenNotepadAndWMP() {

		Runtime rs = Runtime.getRuntime();
		try {
			rs.exec("notepad");
		} catch (IOException e) {
			System.out.println(e);
		}

		try {
			rs.exec("dvdplay");
		} catch (IOException e) {
			System.out.println(e);
		}

		return "task done";
	}
}
