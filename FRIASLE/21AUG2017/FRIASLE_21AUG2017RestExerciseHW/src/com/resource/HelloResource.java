package com.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import net.geo.GeoIP;
import net.geo.GeoIPService;
import net.geo.GeoIPServiceSoap;

@Path("/hello")
public class HelloResource {
	@GET
	@Produces("text/plain")
	public String hello() {
		String ipAddress = "206.190.36.45";
		GeoIPService ipService = new GeoIPService();
		GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
		GeoIP geoIP = geoIPServiceSoap.getGeoIP(ipAddress);
		// geoIPServiceSoap.
		System.out.println(geoIP.getCountryName());
		return "Welcome to JAX-RS: " + geoIP.getCountryName();
	}
}
