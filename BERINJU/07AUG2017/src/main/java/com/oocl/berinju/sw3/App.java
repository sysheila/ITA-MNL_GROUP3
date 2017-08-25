package com.oocl.berinju.sw3;

public class App {

	public static void main(String[] args) throws WhattanException, OopsException{
		// TODO Auto-generated method stub
		Something a = new Something("hi");
		try{
			a.computeSomething();
		}catch(WhattanException e){
			e.printStackTrace();
		}catch(OopsException e){
			e.printStackTrace();
		}catch(NotAnException e){
			e.printStackTrace();
		};

	}

}
