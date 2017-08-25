package com.oocl.kadange.ex;

import currencyConverter.net.webservicex.Currency;
import currencyConverter.net.webservicex.CurrencyConvertor;
import currencyConverter.net.webservicex.CurrencyConvertorSoap;

public class CurrencyConverter {

	public static void main(String[] args) {
		
		if(args.length != 1){
			System.out.println("You need to pass an argument.");
		}else{
			CurrencyConvertor curConvertor = new CurrencyConvertor();
			CurrencyConvertorSoap curSoap = curConvertor.getCurrencyConvertorSoap();
			Double exchange = curSoap.conversionRate(Currency.BMD, Currency.BRL);
			System.out.println(exchange);
		}
		
	}

}
