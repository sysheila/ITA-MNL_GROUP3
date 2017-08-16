package com.oocl.castich.hw2;

import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Hw2 {

	public static void main(String[] args) {

		ApplicationContext context = new ClassPathXmlApplicationContext("hw2-bean.xml");
		NetworkManager network = (NetworkManager) context.getBean("networkManager");
		((ConfigurableApplicationContext)context).close();
	}	
}

class NetworkManager{
	
	HttpConnection httpConnection;
	
	public void init() {
		System.out.println("Initializing network manger...");
		System.out.println("Opening HTTP connection...");
		System.out.println("Connection status: "+httpConnection.getOpen());
	}
	
	public void destroy() {
		System.out.println("Closing HTTP connection...");
		this.getHttpConnection().setOpen(false);
		System.out.println("Closing network manager...");
		System.out.println("Connection status: "+httpConnection.getOpen());
	}

	public HttpConnection getHttpConnection() {
		return httpConnection;
	}

	public void setHttpConnection(HttpConnection httpConnection) {
		this.httpConnection = httpConnection;
	}

}

class HttpConnection{
	boolean open;

	public boolean getOpen() {
		return open;
	}

	public void setOpen(boolean open) {
		this.open = open;
	}
	
}
