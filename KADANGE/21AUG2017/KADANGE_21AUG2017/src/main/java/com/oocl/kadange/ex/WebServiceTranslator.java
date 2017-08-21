package com.oocl.kadange.ex;

import translator.net.webservicex.TranslateService;
import translator.net.webservicex.TranslateServiceSoap;

public class WebServiceTranslator {

	public static void main(String[] args) {
		
		if(args.length != 1){
			System.out.println("You need to pass an argument.");
		}else{
			String word = args[0];
			TranslateService transService = new TranslateService();
			TranslateServiceSoap transSoap = transService.getTranslateServiceSoap();
			String translate = transSoap.translate("EnglishTOChinese", word);
			System.out.println(translate);
		}
		
	}

}
