package com.oocl.FRIASLE.SW;

import geo.GeoIP;
import geo.GeoIPService;
import geo.GeoIPServiceSoap;

public class WebServiceIPLocation {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		if (args.length != 1) {
			System.out.println("You need to pass one IP address");
		} else {
			String ipAddress = args[0];
			GeoIPService ipService = new GeoIPService();
			GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
			GeoIP geoIP = geoIPServiceSoap.getGeoIP(ipAddress);
			// geoIPServiceSoap.
			System.out.println(geoIP.getCountryName());
		}
	}

}
		