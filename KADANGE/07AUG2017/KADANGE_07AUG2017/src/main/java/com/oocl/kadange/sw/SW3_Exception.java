package com.oocl.kadange.sw;

/*class Exception1 extends Exception{
	
}

class Exception2 extends Exception{
	
}

class Exception3 extends Exception{
	
}*/

public class SW3_Exception {
	
	static Exception excep1 = new Exception("Exception on excep1", new NullPointerException());
	static Exception excep2 = new Exception("Exception on excep2", new ArrayIndexOutOfBoundsException());
	static Exception excep3 = new Exception("Exception on excep3", new RuntimeException());
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			throwException(3);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void throwException(int n) throws Exception{
		if(n == 1){
			throw excep1;
		}else if(n == 2){
			throw excep2;
		}else if(n == 3){
			throw excep3;
		}
	}

}
