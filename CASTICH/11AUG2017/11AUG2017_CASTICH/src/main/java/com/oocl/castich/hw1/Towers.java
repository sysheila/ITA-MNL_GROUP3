package com.oocl.castich.hw1;

public class Towers {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		move(3,1,3);
	}
	
   public static void move(int n, int startPole, int endPole) {
      if (n== 0) {
         return;
      } 
      int intermediatePole = 6 - startPole - endPole;
      move(n-1, startPole, intermediatePole);
      System.out.println("Move " +n + " from " + startPole + " to " +endPole);
      move(n-1, intermediatePole, endPole);
   }
}
