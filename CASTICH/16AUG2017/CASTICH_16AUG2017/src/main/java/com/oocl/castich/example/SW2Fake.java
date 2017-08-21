package com.oocl.castich.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SW2Fake {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
		TextEditor t = (TextEditor) context.getBean("textEditor");
	}
	
	
}

class SpellChecker{

	public SpellChecker() {
		System.out.println("Inside SpellChecker constructor...");
	}
	
	public void checkSpelling() {
		
	}

}

class TextEditor{
	SpellChecker spellChecker;
	
	public TextEditor(SpellChecker spellChecker) {
		this.spellChecker = spellChecker;
	}

	public SpellChecker getSpellChecker() {
		return spellChecker;
	}

	public void setSpellChecker(SpellChecker spellChecker) {
		this.spellChecker = spellChecker;
	}
	
	public void spellCheck() {
		spellChecker.checkSpelling();
	}
	
}
