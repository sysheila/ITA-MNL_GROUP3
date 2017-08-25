package com.oocl.kadange.sw;

import java.net.MalformedURLException;
import java.net.URL;

import javax.xml.namespace.QName;
import javax.xml.ws.Service;

//import com.oocl.berinju.sw1.Calculator;
//import com.oocl.berinju.sw1.CalculatorService;

import com.oocl.berinju.sw.CalculatorService;
import com.oocl.berinju.sw.CalculatorServiceService;

public class SW2_CalWS {
	static CalculatorServiceService calSer = new CalculatorServiceService();
	static CalculatorService com = calSer.getCalculatorServicePort();

	//For WSDL Call and not using wsimport on cmd
//	Calculator cal = null;
//	CalculatorService com = null;
//	
//	public SW2_CalWS(){
//		try {
//			URL url = new URL("http://zha-ita004-w7:8050/BERINJU_22AUG2017_SW/CalculatorServiceService?wsdl");
//			QName qname = new QName("http://sw.berinju.oocl.com/", "CalculatorServiceService");
//			Service service = Service.create(url, qname);
//			com = service.getPort(new QName("http://sw.berinju.oocl.com/", "CalculatorServicePort"), CalculatorService.class);
//		} catch (MalformedURLException e) {
//			e.printStackTrace();
//		}
//	}

	//add,sub,div,mul,pow,mod
	public double computeAdd(double x, double y) {
		System.out.println("Adding "+x+" and "+y);
		return com.compute("add", x, y);
	}
	
	public double computeDiff(double x, double y) {
		System.out.println("Subtracting "+x+" and "+y);
		return com.compute("sub", x, y);
	}
	
	public double computeMul(double x, double y) {
		System.out.println("Multiplying "+x+" and "+y);
		return com.compute("mul", x, y);
	}
	
	public double computeDiv(double x, double y) {
		System.out.println("Dividing "+x+" and "+y);
		return com.compute("div", x, y);
	}
	
	public double computePow(double x, double y) {
		System.out.println("The Power of "+x+" to "+y);
		return com.compute("pow", x, y);
	}
	
	public double computeMod(double x, double y) {
		System.out.println("The Modulo of "+x+" to "+y);
		return com.compute("mod", x, y);
	}

}
