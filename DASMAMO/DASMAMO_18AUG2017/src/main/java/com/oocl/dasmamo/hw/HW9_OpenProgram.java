package com.oocl.dasmamo.hw;

import java.io.IOException;
import java.util.Scanner;

public class HW9_OpenProgram {
	static com.sun.security.auth.module.NTSystem NTSystem = new com.sun.security.auth.module.NTSystem();
	public static void main(String[] args) throws IOException {
		Scanner scan = new Scanner(System.in);
		System.out.println("Which program would you like to open?");
		System.out.println("1] Notepad");
		System.out.println("2] Windows Media Player");
		int option = scan.nextInt();
		exec(option);
	}
	
	public static void exec(int option) throws IOException {
		if(option==1) {
			Runtime.getRuntime().exec("Notepad.exe");
		}
		else if(option==2){
			Runtime.getRuntime().exec("C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe");
			Runtime.getRuntime().exec("dvdplay.exe");
			
		}
		else {
			System.out.println("Invalid option!");
		}
	
	}

}
