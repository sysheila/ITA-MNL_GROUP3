package main.java.com.oocl.berinju.sw2;


class Girl implements Runnable {
	Chat chat;

	String sayings[] = { "Girl: Uhm.. Hello.",
			"Girl: Sure. I would love too.", "Girl: Whaa--*vomits*" };

	public Girl(Chat chat) {
		this.chat = chat;
		new Thread(this, "Girl").start();
	}

	public void run() {
		for (int i = 0; i < sayings.length; i++) {
			chat.Girl(sayings[i]);
		}
	}

}

class Boy implements Runnable {
	Chat chat;
	String sayings[] = { "Boy: Hi.",
			"Boy: Wanna grab some coffee?",
			"Boy: I love you too!" };

	public Boy(Chat chat) {
		this.chat = chat;
		new Thread(this, "Boy").start();
	}

	public void run() {
		for (int i = 0; i < sayings.length; i++) {
			chat.Boy(sayings[i]);

		}
	}

}

class Chat {

	public synchronized void Girl(String says) {
		try {
			System.out.println(says);
			Thread.sleep(2000);
			notify();
			wait();

		} catch (Exception e) {

		}

	}

	public synchronized void Boy(String says) {
		try {
			System.out.println(says);
			Thread.sleep(2000);
			notify();
			wait();
		} catch (Exception e) {

		}

	}

}

public class ChatBot {
	
	public static void main(String[] args) {
		Chat chat = new Chat();
		new Boy(chat);
		new Girl(chat);

	}

}
