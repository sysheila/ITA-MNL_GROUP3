package com.oocl.FRIASLE.SW;

import currency.Currency;
import currency.CurrencyConvertor;
import currency.CurrencyConvertorSoap;

public class WebServiceCurrencyConvert {
	public static void main(String[] args) {
		CurrencyConvertor currencyConverter = new CurrencyConvertor();
		CurrencyConvertorSoap currencyConverterSoap = currencyConverter.getCurrencyConvertorSoap();
		Currency x = Currency.fromValue("PHP");
		Currency y = Currency.fromValue("USD");
		double curr = currencyConverterSoap.conversionRate(x, y);
		System.out.println(curr);
	}
}
