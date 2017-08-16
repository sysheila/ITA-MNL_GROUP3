package com.oocl.kadange.hw;

public class HW2_NetworkManager {
	private String manager;

	public void getManager() {
//		return manager;
		System.out.println(manager);
	}

	public void setManager(String manager) {
		this.manager = manager;
	}
	
	public void init(){
		System.out.println("Network Manager initializing...");
	}
	
	public void destroy(){
		System.out.println("Network Manager destroying...");
	}

}
