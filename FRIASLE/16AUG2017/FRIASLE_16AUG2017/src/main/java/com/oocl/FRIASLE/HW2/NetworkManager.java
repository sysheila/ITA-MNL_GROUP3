package com.oocl.FRIASLE.HW2;

import java.sql.Connection;

public class NetworkManager extends HttpConnection {
	String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void init() {
		System.out.println("Been is going through Initializion...");

	}

	public void destroy() {

		System.out.println("Been is going through Destroyed...");
	}

}
