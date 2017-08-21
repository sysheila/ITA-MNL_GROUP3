package com.oocl.FRIASLE.SW;

import translate.TranslateService;
import translate.TranslateServiceSoap;

public class WebServiceTranslate {
	public static void main(String[] args) {
		TranslateService TranslateService = new TranslateService();	
		TranslateServiceSoap translateServiceSoap = TranslateService.getTranslateServiceSoap();
		String translate = translateServiceSoap.translate("EnglishTOChinese", "Hello");
		System.out.println(translate);
	}

}
