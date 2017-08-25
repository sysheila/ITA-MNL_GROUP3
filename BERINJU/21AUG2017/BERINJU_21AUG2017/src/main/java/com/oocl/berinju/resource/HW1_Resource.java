package com.oocl.berinju.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import java.io.IOException;
import java.util.ArrayList;
import java.util.stream.Collectors;
import net.webservicex.GeoIP;
import net.webservicex.GeoIPService;
import net.webservicex.GeoIPServiceSoap;

@Path("/web")
public class HW1_Resource {

		@GET
		@Produces("text/plain")
		@Path("/getCountry/{ip}")
		public String getIPAddress(@PathParam("ip") String ip){
			GeoIPService ipService = new GeoIPService();
			GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
			GeoIP geoIP = geoIPServiceSoap.getGeoIP(ip);

			return geoIP.getCountryName();
		}
		
		
		/**
		 * Sample usage : http://localhost:6082/BERINJU_21AUG2017/hw/web/removeWhiteSpaces/this is a text with spaces
		 * **/
		@GET
		@Produces("text/plain")
		@Path("/removeWhiteSpaces/{string}")
		public String removeDuplicates(@PathParam("string") String string){
			String st = remove(string);
			return "Done. Please check the console for the output. \n" + st;
		}
		
		public String remove(String st){
			st = st.replaceAll("\\s","");
			st = st.replaceAll("[^\\p{ASCII}]","");
			System.out.println(st);
			return st;
		}
		
		
		/**
		 * Sample usage : http://localhost:6082/BERINJU_21AUG2017/hw/web/openProgram/1
		 * @throws IOException 
		 * **/
		@GET
		@Produces("text/plain")
		@Path("/openProgram/{number}")
		public String openProgram(@PathParam("number") String number) throws IOException{
			String st = open(number);
			return "Done. Please check the console for the output. \n" + st;
		}
		
		public String open(String option) throws IOException{
			if(option.equalsIgnoreCase("1")) {
				Runtime.getRuntime().exec("Notepad.exe");
				return "Opening Notepad.";
			}
			else if(option.equalsIgnoreCase("2")){
				Runtime.getRuntime().exec("C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe");
				Runtime.getRuntime().exec("dvdplay.exe");
				return "Opening Windows Media Player.";
			}
			else
			return option;
			
		}
}
