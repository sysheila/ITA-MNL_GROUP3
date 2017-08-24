package com.oocl.daluplo.sw3;

public class DefinedExceptions {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thrower lala = new Thrower();
		try {
			lala.throwExc(1);
		}catch(Exc1 e){
			e.printStackTrace();
		}
		catch(Exc2 r){
			r.printStackTrace();
		}
		catch(Exc3 t){
			t.printStackTrace();
		}
	}
	
	

}
class Thrower {
	
	public void throwExc(int n) throws  Exc1,Exc2,Exc3{
		if(n == 1) {
			throw new Exc1();
		}
		else if(n == 2) {
			throw new Exc2();
		}
		else {
			throw new Exc3();
		}
	}
	
}

class Exc1 extends Exception{
    public Exc1() {     
    	super("ex1");
    }

}
class Exc2 extends Exception{
	public Exc2() {     
    	super("exc2");
    }
}
class Exc3 extends Exception{
	public Exc3() {     
    	super("exc3");
    }
}
