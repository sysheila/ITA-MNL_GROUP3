package com.oocl.dasmamo.sw;

import net.webservicex.GeoIP;
import net.webservicex.GeoIPService;
import net.webservicex.GeoIPServiceSoap;

public class WebServiceIPLocation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		if(args.length!=1) {
			System.out.println("You need to pass one IP address");
		}
		else {
		
		String ipAddress = args[0];
		GeoIPService ipService = new GeoIPService();
		GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
		GeoIP geoIP = geoIPServiceSoap.getGeoIP(ipAddress);
		//geoIPServiceSoap.
		System.out.println(geoIP.getCountryName());
		}
	}
}