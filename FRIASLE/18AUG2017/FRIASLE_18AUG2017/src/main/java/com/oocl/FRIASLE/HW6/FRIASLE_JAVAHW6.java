package com.oocl.FRIASLE.HW6;

import java.io.IOException;

public class FRIASLE_JAVAHW6 {
	public static void main(String[] args) {
		Runtime rs = Runtime.getRuntime();
		try {
			rs.exec("notepad");
		} catch (IOException e) {
			System.out.println(e);
		}

		try {
			rs.exec("dvdplay");
		} catch (IOException e) {
			System.out.println(e);
		}

	}

}
