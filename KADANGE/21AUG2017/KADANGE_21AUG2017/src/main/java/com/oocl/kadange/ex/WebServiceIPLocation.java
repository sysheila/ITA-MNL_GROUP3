package com.oocl.kadange.ex;

import iPService.net.webservicex.GeoIP;
import iPService.net.webservicex.GeoIPService;
import iPService.net.webservicex.GeoIPServiceSoap;

public class WebServiceIPLocation {
	
	public static void main(String[] args) {
		
		if(args.length != 1){
			System.out.println("You need to pass an argument.");
		}else{
			String ipAddress = args[0];
			GeoIPService ipService = new GeoIPService();
			GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
			GeoIP geoIP = geoIPServiceSoap.getGeoIP(ipAddress);
			System.out.println(geoIP.getCountryName());
		}
		
	}

}
