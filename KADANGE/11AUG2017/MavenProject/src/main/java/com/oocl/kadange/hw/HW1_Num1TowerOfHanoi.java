package com.oocl.kadange.hw;

public class HW1_Num1TowerOfHanoi {
	static int[] disks;
	
	//Moves is 2^n - 1 where n is the number of disks
		public void towerOfHanoi(int numOfDisks) {
			disks = new int[numOfDisks];
			//Create disks
			createDisk(numOfDisks);
			//Solve puzzle Tower of Hanoi
			solvePuzzle(disks.length,"A","B","C");
		}
		
		private void solvePuzzle(int height,String fromPole, String toPole, String withPole) {
			if (height >= 1) {
				solvePuzzle(height-1,fromPole,withPole,toPole);
		        moveDisk(disks[height-1],fromPole,withPole);
		        solvePuzzle(height-1,toPole,fromPole,withPole);
			}
		}
		
		private static void moveDisk(int disk,String fp,String tp) {
			System.out.println("Disk "+disk+" from "+fp+" to "+tp);
		}
		
		private static void createDisk(int max) {
			for(int i=0; i<max;i++) {
				disks[i] = i+1;
			}
		}

}
