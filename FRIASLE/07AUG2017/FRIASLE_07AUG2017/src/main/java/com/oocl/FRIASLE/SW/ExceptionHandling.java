package com.oocl.FRIASLE.SW;

public class ExceptionHandling {
	
	public static void main(String args[]) {
		Integer e = null;
		try {
			e.toString();
		}catch (Exception z) {
			z.printStackTrace();
			System.out.println("Error caught");
		}
	}

}
