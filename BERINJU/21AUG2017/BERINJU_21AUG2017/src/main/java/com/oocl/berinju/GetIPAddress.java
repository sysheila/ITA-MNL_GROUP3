package com.oocl.berinju;

import net.webservicex.GeoIP;
import net.webservicex.GeoIPService;
import net.webservicex.GeoIPServiceSoap;
import net.webservicex.translate.Translate;
import net.webservicex.translate.TranslateResponse;
import net.webservicex.translate.TranslateService;
import net.webservicex.translate.TranslateServiceSoap;
import net.webservicex.currency.*;

public class GetIPAddress {
	public static void main(String args[]){
		
//		if(args.length > 1 || args.length == 0){
//			System.out.println("You need to pass in one IP address");
//		}else{	
//			String ipAddress = args[0];
		    String ipAddress = "111.13.101.208";
			GeoIPService ipService = new GeoIPService();
			GeoIPServiceSoap geoIPServiceSoap = ipService.getGeoIPServiceSoap();
			GeoIP geoIP = geoIPServiceSoap.getGeoIP(ipAddress);
			System.out.println(geoIP.getCountryName());
		}
//		if(args.length > 1 || args.length == 0){
//			System.out.println("You need to pass in one IP address");
//		}else{	
//			String text = args[0];
//		Translate svc = new Translate();
//		TranslateService tsvc = new TranslateService();
//		TranslateServiceSoap soap = tsvc.getTranslateServiceSoap();
//	    String response = soap.translate("EnglishTOChinese", text);
//	    System.out.println(response);
//		}

//			ConversionRate rate = new ConversionRate();
//			rate.setFromCurrency(Currency.USD);
//			rate.setToCurrency(Currency.CNY);
//		CurrencyConvertor svc = new CurrencyConvertor();
//		CurrencyConvertorSoap soap = svc.getCurrencyConvertorSoap();
//		Double result = soap.conversionRate(rate.getFromCurrency(), rate.getToCurrency());
//		
//	    System.out.println(result);
		
	//}
	
}
