package com.resource;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import iPService.net.webservicex.GeoIP;
import iPService.net.webservicex.GeoIPService;
import iPService.net.webservicex.GeoIPServiceSoap;

@Path("/ipService")
public class RestIPService {
	@GET
	@Produces("text/plain")
	@Path("/getCountry/{ip}")
	public String ipService(@PathParam("ip") String ip){
		//return "Welcome to JAX-RS";
		return getIPAddress(ip);
	}
	
	public String getIPAddress(String ip){
		String ipAddress = "13.107.21.200";
		GeoIPService ipService = new GeoIPService();
		GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
		GeoIP geoIP = geoIPServiceSoap.getGeoIP(ip);
		System.out.println(geoIP.getCountryName());
		return geoIP.getCountryName();
	}
}