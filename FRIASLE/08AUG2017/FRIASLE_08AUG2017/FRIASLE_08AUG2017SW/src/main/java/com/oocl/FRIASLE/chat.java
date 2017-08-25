package com.oocl.FRIASLE;

public class chat {

	boolean flag = false;

	public static void main(String[] args) throws Throwable {
		chat m = new chat();
		new T1("first Thread",m);
		new T2("Second Thread",m);
	}

	public synchronized void Answer(String threadName, String msg) {
		if (!flag) {
			try {
				wait();
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.print(threadName +": ");
		System.out.println(msg);
		flag = false;
		notify();
	}

	public synchronized void Question(String threadName, String msg) {
		if (flag) {
			try {
				wait();
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		System.out.print(threadName+": ");
		System.out.println(msg);
		flag = true;
		notify();
	}
}

class T1 implements Runnable {
	chat m;
	String[] s1 = { "HI", "How are you?", "Are you feeling okay" };
	String threadName;

	public T1(String threadName, chat m1) {
		this.m = m1;
		this.threadName = threadName;
		new Thread(this, "Question").start();
	}

	public void run() {
		for (int i = 0; i < s1.length; i++) {
			m.Question(threadName, s1[i]);
		}

	}
}

class T2 implements Runnable {
	chat m;
	String[] s2 = { "Hello", "I'm Good", "Fabulous, How About you" };

	String threadName;

	public T2(String threadName, chat m) {
		this.threadName = threadName;
		this.m = m;
		new Thread(this, "Answer").start();
	}

	public void run() {
		for (int i = 0; i < s2.length; i++) {
			m.Answer(threadName, s2[i]);
		}
	}
}