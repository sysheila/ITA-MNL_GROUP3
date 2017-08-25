package com.oocl.castich.sw2;

public class RunnableDemo implements Runnable {

	private String name;

	public RunnableDemo(String name) {
		this.name = name;
		System.out.println("Created thread "+ this.getName());
	}
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("Running thread "+ this.getName());
		try {
			int i=0;
			while(i<10) {
				i++;
			}
			System.out.println("Sleeping thread "+this.name);
			Thread.sleep(100);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("Exiting thread "+ this.getName());
		
	}
	
	public void start() {
		System.out.println("Starting thread "+ this.getName());
		Thread thread = new Thread(this, this.name);
		thread.start();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
