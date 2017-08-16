package com.oocl.berinju.sw2;

public class TextEditor {
	private SpellChecker spellChecker;
	
	// setter method to inject the dependency.
	public void setSpellChecker (SpellChecker spellChecker) {
		System.out.println("Inside setSpellChecker...");
		this.spellChecker = spellChecker;
	}
	
	// getter metohd to return spellChecker.
	public SpellChecker getSpellChecker() {
		return spellChecker;
	}
	
	public void spellCheck() {
		spellChecker.checkSpelling();
	}
	

}
