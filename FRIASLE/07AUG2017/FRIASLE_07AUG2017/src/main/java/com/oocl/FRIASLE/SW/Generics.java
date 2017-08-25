package com.oocl.FRIASLE.SW;

public class Generics {

	public static void main(String args[]) {

		D<String> x = new D<String>("Levi", "The Bronicle", "The brony");
		System.out.println(x.getA());
		System.out.println(x.getB());
		System.out.println(x.getC());
		
	}

}

class A {
	String name;

	public A(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

class B {
	String name;

	public B(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

class C {
	String name;

	public C(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}

class D<Tuturu> {

	private Tuturu a, b, c;

	public Tuturu getA() {
		return a;
	}

	public void setA(Tuturu a) {
		this.a = a;
	}

	public Tuturu getB() {
		return b;
	}

	public void setB(Tuturu b) {
		this.b = b;
	}

	public Tuturu getC() {
		return c;
	}

	public void setC(Tuturu c) {
		this.c = c;
	}

	public D(Tuturu a, Tuturu b, Tuturu c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

}