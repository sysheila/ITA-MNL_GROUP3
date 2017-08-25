package com.oocl.kadange.sw;

class Chat{
	private Boolean flag = false;
	
	public synchronized void question(String msg, String name){
		if(flag){
			try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(name+": "+msg);
		flag = true;
		notify();
	}
	
	public synchronized void answer(String msg, String name){
		if(!flag){
			try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println(name+": "+msg);
		flag = false;
		notify();
	}
}

class T1 implements Runnable{
	String[] say = {"Hi", "How are you?", "I'm great!"};
	Chat c = new Chat();
	private String name;
	
	public T1(Chat m, String name){
		this.c = m;
		this.name = name;
		new Thread(this, "Question").start();
	}
	
	public void run(){
		for(int i=0;i<say.length;i++){
			c.question(say[i], name);
		}
	}
}

class T2 implements Runnable{
	String[] say = {"Hi", "I'm fine! How about how?", "Good!"};
	Chat c = new Chat();
	private String name;
	
	public T2(Chat m, String name){
		this.c = m;
		this.name = name;
		new Thread(this, "Answer").start();
	}

	public void run() {
		for(int i=0;i<say.length;i++){
			c.answer(say[i], name);
		}
	}
}

public class SW2_MultiThreadConvo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Chat chat = new Chat();
		
		new T1(chat, "Thread1");
		new T2(chat, "Thread2");
	}

}
