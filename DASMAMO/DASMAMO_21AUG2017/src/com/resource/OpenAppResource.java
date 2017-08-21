package com.resource;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/openApp/{string}")
public class OpenAppResource {
					
		@GET
		@Produces("text/plain")
		public String execAppOne(@PathParam("string") int string) throws IOException {
			displayInfo();
			return execApp(string);
		}
		public String displayInfo() {
			String a = "Which media to open?\n";
			String b = "1] Open Notedpad\n";
			String c = "2] Open Windows Media Player";
			return a+b+c;
		}
		public static String execApp(int option) throws IOException {
			String a;
			if(option==1) {
				Runtime.getRuntime().exec("Notepad.exe");
				 a= "Notepad";
			}
			else if(option==2){
				Runtime.getRuntime().exec("C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe");
				Runtime.getRuntime().exec("dvdplay.exe");
				a= "WMP";
			}
			else {
				 a= "Invalid option!";
			}
			return a;
		
		}

	}
