package com.oocl.FRIASLE.SW;

import java.io.PrintStream;
import java.util.EmptyStackException;

public class threeExceptions {

	public static void main(String args[]) {
		Thrower2 t = new Thrower2();
		try {
			t.f();
		} catch (ExBase e) {
			System.out.println("caught " + e);
		} catch (Exception e) {
			System.out.println("caught " + e);
		}

	}

}

class ExBase extends Exception {

}

class Ex1 extends ExBase {

}

class Ex2 extends ExBase {

}

class Ex3 extends ExBase {

}

class Thrower2 {
	void f() throws Ex1, Ex2, Ex3 {
		throw new Ex1();
	}
}
