package main.java.com.oocl.berinju.sw1;

import java.util.Scanner;


public class InsufficientFundsException extends Throwable{

	public InsufficientFundsException() {
		// TODO Auto-generated constructor stub
		
	}
	public static void printMenu(){
		System.out.println("**************************************");
		System.out.println("(1) Deposit ");
		System.out.println("(2) Withdraw ");
		System.out.println("(3) Check Balance ");
		System.out.println("(4) Exit ");
		System.out.println("**************************************");
	}
	
	public static void main(String args[]){
		int number;
		ATM atm = new ATM();
		Person person = new Person();
		
			
		do{
			printMenu();
			System.out.println("Enter a number (1, 2, 3 and 4) ");
			System.out.println("Input : ");
			Scanner scan = new Scanner(System.in);
			String result = scan.next();
			number = Integer.parseInt(result);
			if(number == 1){
				atm.deposit(person);
			}else if(number == 2){
				try {
					atm.withdraw(person);
				} catch (InsufficientFundsException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}else if(number == 3){
				System.out.println(atm.getBalance());
			}
		}while(number != 4);
		


	}

	
}

class ATM{
	double balance;
	
	public ATM(){
		this.balance = 0;
		System.out.println("Current balance " + this.balance);
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public void deposit(Person person){
		this.balance=this.balance+person.getMoney();
		System.out.println("Current balance " + this.balance);
	}
	public void withdraw(Person person) throws InsufficientFundsException{
		if(this.balance-person.getMoney() < 0){
			throw new InsufficientFundsException();
		}else{
			this.balance=this.balance-person.getMoney();
		}

		System.out.println("Current balance " + this.balance);
	}
	
}

class Person{
	String name;
	int age;
	
	public double getMoney() {
//		System.out.println("How much?");
//		Scanner scan = new Scanner(System.in);
//		double amount = scan.nextDouble();
		double amount = 1000;
		return amount;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
}

