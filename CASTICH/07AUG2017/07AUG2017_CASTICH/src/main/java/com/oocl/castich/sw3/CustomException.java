package com.oocl.castich.sw3;

public class CustomException {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		ExceptionThrower et = new ExceptionThrower();
		try {
			et.throwThem();
		} catch (Exception1 e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}  catch (Exception2 e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception3 e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch(Exception e) {
			e.printStackTrace();
		}
	}

}
class ExceptionThrower{

	public void throwThem() throws Exception1, Exception2, Exception3{
		int i = 2;
		
		if(i==1) {
			throw new Exception1();
		}
		
		else if(i==2) {
			throw new Exception2();
		}
		
		else if(i==3) {
			throw new Exception3();
		}
	}
	
	
}

class Exception1 extends Exception{

	public Exception1() {
		super("Hello from Exception1 :)");
	}
}

class Exception2 extends Exception{
	
	public Exception2() {
		super("Hello from Exception2 :)");
		int a;
		char c = 'A';
		a = c;

	}
}

class Exception3 extends Exception{

	public Exception3() {
		super("Hello from Exception3 :)");
	}
}