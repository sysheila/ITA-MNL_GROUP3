package com.oocl.daluplo.sw2;

public class GenClass<T> {
	private T a, b, c;
	
	public GenClass(T m, T n, T o) {
		// TODO Auto-generated constructor stub
		this.a = m;
		this.b = n;
		this.c = o;
	}

	public T getA() {
		return a;
	}

	public void setA(T a) {
		this.a = a;
	}

	public T getB() {
		return b;
	}

	public void setB(T b) {
		this.b = b;
	}

	public T getC() {
		return c;
	}

	public void setC(T c) {
		this.c = c;
	}
	

}
