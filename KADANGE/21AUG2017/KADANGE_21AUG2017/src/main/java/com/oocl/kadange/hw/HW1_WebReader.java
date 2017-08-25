package com.oocl.kadange.hw;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/webReader")
public class HW1_WebReader {
	@GET
	@Produces("text/plain")
	@Path("/web/{url}")
	public String webReader(@PathParam("url") String url) {
		//return "Hello web!";
		return getUrlContents("http://"+url);
	}

	private static String getUrlContents(String theUrl) {
		StringBuilder content = new StringBuilder();

		try {
			URL url = new URL(theUrl);
			URLConnection urlConnection = url.openConnection();
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

			String line = "";
			while ((line = bufferedReader.readLine()) != null) {
				content.append(line + "\n");
			}
			bufferedReader.close();
		} catch (Exception e) {
			e.printStackTrace();
			String error = e.getMessage();
			return "Cannot access inputed url! \nCaused by: "+error;
		}
		return content.toString();
	}

}
