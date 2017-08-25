package com.oocl.berinju.sw2;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.oocl.berinju.spring.Student;
import com.oocl.kadange.sw.*;

public class App {
	
	public Calculate setArgs(Calculate cal){
		cal.setArg0("Addition");
		cal.setArg1(4.5);
		cal.setArg2(5.6);
		return cal;
	}
	
	public double callWS(Calculate cal){
		SW1WebCalService ws = new SW1WebCalService();
		SW1WebCal gsp = ws.getSW1WebCalPort();   
		
		double sagot = gsp.calculate(cal.getArg0(), cal.getArg1(), cal.getArg2());
		return sagot;
		
	} 
	public static void main(String[] args) {
		
		// TODO Auto-generated method stub
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		Calculate cal = new Calculate();
		App app = (App) context.getBean("geneWS");
		
		cal = app.setArgs(cal);
		app.callWS(cal);
	
	}

}
