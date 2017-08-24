package com.oocl.castich.sw2;

public class Runnables {

}

class Chat1 implements Runnable{
	Chat m;
	String[] messages = {"Hi ;)","How are you? ;)","I'm good too. ;)"};
	
	public Chat1(Chat m) {
		this.m = m;
		new Thread(this, "Question").start();
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		synchronized(m) {
			for(int i=0; i<3; i++) {
				m.Say("Thread 1 says \"" + messages[i]+"\"");
				try {
					m.wait();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				m.notify();
			}
		}
	}
	
}

class Chat2 implements Runnable{
	Chat m;
	String[] messages = {"Hello ;)","I'm good! You? ;)","Great! ;)"};
	public Chat2(Chat m) {
		this.m = m;
		new Thread(this, "Answer").start();
	}

	@Override
	public void run() {
		// TODO Auto-generated method stub
		synchronized(m) {
			for(int i=0; i<3; i++) {
				m.Say("Thread 2 says \"" + messages[i]+"\"");
				m.notify();
				try {
					m.wait();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
	
}

class Chat{
	public void Say(String answer) {
		System.out.println(answer);
	}
}
