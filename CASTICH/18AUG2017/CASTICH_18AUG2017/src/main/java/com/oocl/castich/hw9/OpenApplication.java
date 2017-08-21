package com.oocl.castich.hw9;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class OpenApplication {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);

		boolean done = false;
		String path = "";
		
		while(!done) {
			System.out.println("[1] Notepad");
			System.out.println("[2] Windows Media Player");
			System.out.print("Open application: ");
			
			int choice = s.nextInt();
			switch(choice) {
				case 1:
					path = "C:\\windows\\system32\\notepad.exe";
					System.out.println("\nOpening Notepad...\n");
					break;
				case 2:
					path = "C:\\Program Files (x86)\\Windows Media Player\\wmplayer.exe";
					System.out.println("\nOpening Windows Media Player...\n");
					break;
				default:
					System.out.println("Invalid choice!");
					break;
			}
			
			File file = new File(path);
			try {
				Desktop.getDesktop().open(file);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			System.out.println("Do you want to continue? Y/N");
			char i = s.next().charAt(0);
			
			if(i=='Y'|| i=='y') {
				done=false;
				continue;
			}
			done = true;
		}
		
		
	}

}
