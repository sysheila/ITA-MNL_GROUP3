package com.oocl.berinju.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
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
		
		
		@GET
		@Produces("text/plain")
		@Path("/removeDuplicates")
		public String removeDuplicates(){
			remove();
			return "Done. Please check the console for the output.";
		}
		
		public void remove(){
			ArrayList<String> list= new ArrayList<String>();
			list.add("Dog");
			list.add("Cat");
			list.add("注释");
			System.out.println("Original : ");
			for(String str : list) {
				System.out.println(str);
			}
			System.out.println("Filtered : ");
			//list = (ArrayList<String>) list.stream().distinct().collect(Collectors.toList());
			for(String str : list) {
				System.out.println(str);
			}
		}
}
