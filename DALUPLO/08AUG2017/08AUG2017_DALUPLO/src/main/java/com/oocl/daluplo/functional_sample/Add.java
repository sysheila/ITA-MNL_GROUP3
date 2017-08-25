package com.oocl.daluplo.functional;

public class Add {
	static int add(int x,int y) {return x+y;}
	static int adder(int a, int b) {
		while(b>0) {
			a++;
			b--;
		}
		return a;
	}
	static int adder1(int a, int b) {
		while(b-- >0) {
			++a;
		}
		return a;
	}
	
	static int divide(int x, int y) {
		return((int)(x/(float)y));
	}
	static int addFP(int f, int s) {
		return s== 0? f: addFP(++f,--s);
	}
	
	public static void main(String[] args) {
		System.out.println(adder1(1,2));
		System.out.println(divide(6,0));
		System.out.println(addFP(20,100000));
	}
}


