package com.oocl.dasmamo.hw;

import java.util.Scanner;

public class HW_TowerOfHanoi {
	 public void solve(int n, String start, String auxiliary, String end) {
	       if (n == 1) {
	           System.out.println(start + " moved to " + end);
	       } else {
	           solve(n - 1, start, end, auxiliary);
	           System.out.println(start + " moved to " + end);
	           solve(n - 1, auxiliary, start, end);
	       }
	   }

	   public static void main(String[] args) {
		   HW_TowerOfHanoi towersOfHanoi = new HW_TowerOfHanoi();
	       System.out.print("Enter number of discs: ");
	       Scanner scanner = new Scanner(System.in);
	       int discs = scanner.nextInt();
	       towersOfHanoi.solve(discs, "A", "B", "C");
	   }
}
