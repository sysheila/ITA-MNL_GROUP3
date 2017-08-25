package com.oocl.berinju.sw2;


public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Something a = new Something("What");
		Something b = new Something("the");
		Something c = new Something("heck");

		GenericsTest<Something> g = new GenericsTest<Something>(a,b,c);
		System.out.println(g.getA().getName() + g.getA().computeSomething());
		System.out.println(g.getB().getName() + g.getB().computeSomething());
		System.out.println(g.getC().getName() + g.getC().computeSomething());
		
		GenericsTest<Integer> intg = new GenericsTest<Integer>(1,2,3);
		System.out.println(intg.getA());
		System.out.println(intg.getB());
		System.out.println(intg.getC());
		
		GenericsTest<String> stringG = new GenericsTest<String>("One","Two","Three");
		System.out.println(stringG.getA());
		System.out.println(stringG.getB());
		System.out.println(stringG.getC());
		
		GenericsTest<Float> stringF = new GenericsTest<Float>(1.0f,2.0f,3.0f);
		System.out.println(stringF.getA());
		System.out.println(stringF.getB());
		System.out.println(stringF.getC());
		

	}

}
