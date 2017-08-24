package com.oocl.kadange.sw;

class Holder<T>{
	private T a, b, c;
	
	public Holder(){}
	
	public Holder(T a, T b, T c){
		this.a = a;
		this.b = b;
		this.c = c;
	}
	
	public void setA(T t){ this.a = t; }	
	public void setB(T t){ this.b = t; }
	public void setC(T t){ this.c = t; }
	
	public T getA(){ return this.a; }
	public T getB(){ return this.b; }
	public T getC(){ return this.c; }
}

public class SW2_Generics {
	
	public static void main(String args[]){
//		String name = "Gene",middleName = "S",age = "21";
		String name = "Gene";
		char middleName = 'S';
		int age = 21;
		
//		Holder<String> info = new Holder<String>(name, middleName, age);
//		
//		System.out.println("Name: "+info.getA());
//		System.out.println("Middle name: "+info.getB());
//		System.out.println("Age: "+info.getC());
//		
//		info.setC("23");
//		System.out.println("Age: "+info.getC());
//		
//		Holder<Integer> lottery = new Holder<Integer>(20,21,22);
//		System.out.println(lottery.getA()+" "+lottery.getB()+" "+lottery.getC());
		
		Holder<Object> testHolder = new Holder<Object>();
		testHolder.setA(name);
		testHolder.setB(middleName);
		testHolder.setC(age);
		System.out.println("Name: "+testHolder.getA());
		System.out.println("Middle name: "+testHolder.getB());
		System.out.println("Age: "+testHolder.getC());
	}

}
