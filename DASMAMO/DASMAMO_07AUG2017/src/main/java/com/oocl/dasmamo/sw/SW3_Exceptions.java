package com.oocl.dasmamo.sw;

public class SW3_Exceptions {

	public SW3_Exceptions() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		String a = null;
		int[] b = { 1, 2, 4, 4, 5 };
		int c;

		try {
			// a.length();
			c = b[8];
		} catch (NullPointerException e) {
			exceptions(e);
		} catch (ArrayIndexOutOfBoundsException e) {
			exceptions(e);
		}

	}

	public static void exceptions(Exception e) {
		System.out.println("caught" + e);
	}

}
