package com.oocl.dasmamo.sw;

import net.webservicex.TranslateService;
import net.webservicex.TranslateServiceSoap;

public class WebServiceTranslate {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		if(args.length!=1) {
			System.out.println("You need to string");
		}
		else {
			String word = args[0];
			TranslateService translate = new TranslateService();
			TranslateServiceSoap translateServiceSoap = translate.getTranslateServiceSoap();
			String translateWord = translateServiceSoap.translate("EnglishTOSpanish", word);
			System.out.println(translateWord);
		}
	}
}
