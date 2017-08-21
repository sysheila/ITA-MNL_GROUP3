package com.oocl.berinju.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import net.webservicex.GeoIP;
import net.webservicex.GeoIPService;
import net.webservicex.GeoIPServiceSoap;

@Path("/geo")
public class HelloResource {

		@GET
		@Produces("text/plain")
		@Path("/getCountry/{ip}")
		public String getIPAddress(@PathParam("ip") String ip){
			GeoIPService ipService = new GeoIPService();
			GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
			GeoIP geoIP = geoIPServiceSoap.getGeoIP(ip);

			return geoIP.getCountryName();
		}
}
