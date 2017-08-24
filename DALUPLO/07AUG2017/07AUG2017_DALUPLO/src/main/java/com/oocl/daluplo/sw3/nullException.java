package com.oocl.daluplo.sw3;

public class nullException {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String n = null;
		try {
			System.out.println(n.substring(1));
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
