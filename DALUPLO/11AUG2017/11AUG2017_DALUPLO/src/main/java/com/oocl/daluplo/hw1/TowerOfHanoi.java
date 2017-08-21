package com.oocl.daluplo.hw1;
import java.util.Scanner;

public class TowerOfHanoi {

	  public void solve(int n, String start, String auxiliary, String end) {
	       if (n == 1) {
	           System.out.println("Disk1:  " + start + " ----> " + end);
	       } else {
	           solve(n - 1, start, end, auxiliary);
	           System.out.println("Disk" + n + ":  " + start + " ----> " + end);
	           solve(n - 1, auxiliary, start, end);
	       }
	   }

	  public static void main(String[] args) {
		  TowerOfHanoi towersOfHanoi = new TowerOfHanoi();
	       System.out.print("Enter number of discs: ");
	       Scanner scanner = new Scanner(System.in);
	       int discs = scanner.nextInt();
	       towersOfHanoi.solve(discs, "T1", "T2", "T3");
	   }
		

}
