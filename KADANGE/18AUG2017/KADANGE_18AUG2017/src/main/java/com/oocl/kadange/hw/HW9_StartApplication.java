package com.oocl.kadange.hw;

import java.io.IOException;

public class HW9_StartApplication {

	public static void main(String[] args) {
		openApp("notepad");
		openApp("dvdplay");
	}
	
	public static void openApp(String app) {
		try {
			System.out.println("Opening "+app);
			Runtime runTime = Runtime.getRuntime();
			Process process = runTime.exec(app);
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			System.out.println("Closing "+app);
			process.destroy();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
