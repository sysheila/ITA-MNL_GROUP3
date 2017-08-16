package com.oocl.berinju.hw1;

public class HW1_AnimalFactory {
	private HW1_Animal animal;
	
	public HW1_AnimalFactory(){
		
	}

	public HW1_Animal getAnimal() {
		return animal;
	}

	public void setAnimal(HW1_Animal animal) {
		this.animal = animal;
	}
	
	public void makeSound(){
		animal.makeSound();
	}
	
	
}
