package com.oocl.berinju.sw2;


public class GenericsTest<E> {
	
	private E a,b,c;
	
	public GenericsTest(E a, E b, E c){
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	public E getA() {
		return a;
	}

	public void setA(E a) {
		this.a = a;
	}

	public E getB() {
		return b;
	}

	public void setB(E b) {
		this.b = b;
	}

	public E getC() {
		return c;
	}

	public void setC(E c) {
		this.c = c;
	}

	


}
