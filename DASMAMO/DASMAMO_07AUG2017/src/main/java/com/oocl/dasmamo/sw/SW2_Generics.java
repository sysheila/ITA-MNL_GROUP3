package com.oocl.dasmamo.sw;

class Holder<T> {
	private T a, b, c;

	public Holder(T a, T b, T c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	public void setA(T a) {
		this.a = a;
	}

	public void setB(T b) {
		this.b = b;
	}

	public void setC(T c) {
		this.c = c;
	}

	public T getA() {
		return a;
	}

	public T getB() {
		return b;
	}

	public T getC() {
		return c;
	}
}

public class SW2_Generics {
	public static void main(String[] args) {
		/*
		 * String a = "A", b="B", c="C"; Holder<String> gp = new Holder<String>(a,b,c);
		 * System.out.println(gp.getA()); System.out.println(gp.getB());
		 * System.out.println(gp.getC());
		 */
		int a = 21, b = 324, c = 22;
		Holder<Integer> gp = new Holder<Integer>(a, b, c);
		System.out.println(gp.getA());
		System.out.println(gp.getB());
		System.out.println(gp.getC());

	}

}
