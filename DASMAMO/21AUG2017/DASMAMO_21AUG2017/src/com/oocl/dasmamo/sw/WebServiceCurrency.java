package com.oocl.dasmamo.sw;

import net.webservicex.Currency;
import net.webservicex.CurrencyConvertor;
import net.webservicex.CurrencyConvertorSoap;

public class WebServiceCurrency {
	public static void main(String[] args) {
		
		Currency fromCurrency = Currency.PHP;
		Currency toCurrency = Currency.USD;
		
		CurrencyConvertorSoap currencyConvertorSoap = null;
		CurrencyConvertor cc = new CurrencyConvertor();
		currencyConvertorSoap = cc.getCurrencyConvertorSoap();
		double s = currencyConvertorSoap.conversionRate(fromCurrency,toCurrency);
		System.out.println(s);
		
		}

	}


