package com.oocl.dasmamo.sw;

	class Chat {
		boolean flag = false;

		public synchronized void Question(String msg) {
			// System.out.println("Q: " + flag );
			if (flag) {
				// System.out.println("Entered if Q");
				try {
					wait();
					Thread.sleep(4500);

				} catch (Exception e) {
					/* e.printStackTrace(e); */
				}
			}
			System.out.println(msg);
			flag = true;
			// System.out.println("Q: " + flag );
			notify();
		}

		public synchronized void Answers(String msg) throws InterruptedException {
			// System.out.println("A: " + flag);
			if (!flag) {
				// System.out.println("Entered if A");
				try {
					wait();
					Thread.sleep(3000);

				} catch (Exception e) {
					/* e.printStackTrace(e); */
				}
			}
			System.out.println(msg);
			flag = false;
			// System.out.println("A: " + flag );
			notify();
		}
	}

	class QuestionsClass implements Runnable {
		Chat m;
		String[] s1 = { "Howdie!", "How are you?", "Are you feeling good?", "Same! Hey, gotta go" };

		public QuestionsClass(Chat m1) throws InterruptedException {
			this.m = m1;
			new Thread(this, "Question").start();
		}

		public void run() {

			for (int i = 0; i < s1.length; i++) {
				m.Question(s1[i]);
			}
			// System.out.println(Thread.currentThread().getName() +
			// Thread.currentThread().getState());
		}
	}

	class AnswersClass implements Runnable {
		Chat m;
		String[] s2 = { "Hello~", "I'm good", "Yes, how about you?", "Oh I see, nice to see you. Bye." };

		public AnswersClass(Chat m2) {
			this.m = m2;
			new Thread(this, "Answer").start();
		}

		public void run() {
			for (int i = 0; i < s2.length; i++)
				try {
					m.Answers(s2[i]);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			// System.out.println(Thread.currentThread().getName() +
			// Thread.currentThread().getState());
		}
	}

	public class SW2_ChatThread {
		public static void main(String[] args) throws Throwable {
			Chat m = new Chat();
			new QuestionsClass(m);
			new AnswersClass(m);
		}
	}
