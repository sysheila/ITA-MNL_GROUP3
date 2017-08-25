package com.oocl.kadange.sw;

import java.util.Scanner;

public class SW4_RegexExercise {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String username = "ABCabc123", password = "ABCabc123";
		Boolean isAllowedUsername = false, isAllowedPassword = false;
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter username:");
//		username = sc.nextLine();
		System.out.println("Enter password:");
//		password = inputPass();
		
		System.out.println(username+" "+password);
	}   
	
	public static String inputPass(){
		System.out.println("Enter password:");
		Scanner sc = new Scanner(System.in);
		String pass = sc.nextLine().toString();
		Boolean isPass = validate(pass);
		if(!isPass){
			inputPass();
		}
		return pass;
	}
	
	public static Boolean validate(String input){
//		String[] string = input.split("[A-Za-z0-9!@#$%^&*();/\\|<>\"\'+-.,=?:]*");
		if(!input.matches("[A-Za-z0-9!@#$%^&*();/\\|<>\"\'+-.,=?:]*")){
			return true;
		}else{
			return false;
		}
	}

}
