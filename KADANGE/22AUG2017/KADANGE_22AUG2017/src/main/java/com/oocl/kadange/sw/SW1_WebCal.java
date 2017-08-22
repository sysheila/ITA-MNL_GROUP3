package com.oocl.kadange.sw;

import java.net.Inet4Address;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.servlet.http.HttpServletRequest;
import javax.xml.ws.WebServiceContext;
import javax.xml.ws.handler.MessageContext;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@WebService
public class SW1_WebCal {

	AbstractApplicationContext context = new ClassPathXmlApplicationContext("WebCalBeans.xml");
	SW1_Calculator calculator = (SW1_Calculator) context.getBean("webcal");
	// SW1_Calculator calculator = new SW1_Calculator();

	// Annotation @WebMethod is I think automatically called in @WebService
	@WebMethod
	public List<String> getCalMethod() {
		return calculator.getCalMethod();
	}

	@Resource
	WebServiceContext wsContext;
	public String myMethod() {
		Inet4Address add = null;
		MessageContext mc = wsContext.getMessageContext();
		HttpServletRequest req = (HttpServletRequest) mc.get(MessageContext.SERVLET_REQUEST);
		System.out.println(req.getRemoteAddr());
		//req.getHeader("X-Forwarded-For") -- null
		return req.getRemoteAddr()+" "+req.getLocalName()+" "+req.getHeader("X-Forwarded-For");
	} 

	public double calculate(String method, double x, double y) {
		return calculator.calculate(method, x, y);
	}
}
