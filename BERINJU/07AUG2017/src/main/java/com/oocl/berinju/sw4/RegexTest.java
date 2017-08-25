package com.oocl.berinju.sw4;
import java.util.Scanner;

//8-16 number letter symbol
public class RegexTest {
	public static String	USERNAME="^[A-Za-z][A-Za-z0-9\\!\\@\\#\\$\\%\\^\\&\\*]{7,15}$",
							PASSWORD="^[A-Za-z][A-Za-z0-9\\!\\@\\#\\$\\%\\^\\&\\*]{7,15}$";
	
	public RegexTest() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		RegexTest app = new RegexTest();
		app.banner();
		app.login();

	}

	private void banner() {
		// TODO Auto-generated method stub
		System.out.println("=========Regular Expressions===========");
	}

	private static void login() {
		// TODO Auto-generated method stub
		Scanner scanUser=new Scanner(System.in);
		Scanner scanPass=new Scanner(System.in);
		getInfo(scanUser,scanPass);
	}

	private static void getInfo(Scanner scanUser, Scanner scanPass) {
		// TODO Auto-generated method stub
		System.out.println("Enter username : ");
		String username=scanUser.nextLine();
		System.out.println("Enter password : ");
		String password=scanPass.nextLine();
		verifyLogin(username,password);
	}

	private static void verifyLogin(String username, String password) {
		// TODO Auto-generated method stub
		boolean userFlag,passFlag;
		
		if(username.matches(USERNAME)){
			userFlag=true;
		}else{
			userFlag=false;
			System.out.println("Invalid format for username.");
		}
		if(password.matches(PASSWORD)){
			passFlag=true;
		}else{
			passFlag=false;
			System.out.println("Invalid format for password.");
		}
		if(!userFlag || !passFlag){
			System.out.println("\nCannot connect due to invalid credentials.");
		}else{
			System.out.println("\nYou are now logged in as " + username);
		}
	}

}
