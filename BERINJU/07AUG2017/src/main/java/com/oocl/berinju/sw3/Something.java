package com.oocl.berinju.sw3;

public class Something {

	public String getName() {
		return name;
	}
	private String name;

	public Something(String name) {   
		// TODO Auto-generated constructor stub
		this.name = name;
	}
	
	public String computeSomething() throws WhattanException, OopsException, NotAnException{
		String string = "2"; 
		
		if(string == "1") throw new WhattanException();
		else if(string =="2") throw new OopsException();
		else if(string =="3") throw new NotAnException();
		
		return string;
	}
}
