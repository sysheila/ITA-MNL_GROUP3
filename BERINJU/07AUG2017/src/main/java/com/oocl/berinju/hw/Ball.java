package com.oocl.berinju.hw;


public class Ball{
	String name;
	int weight;
	
	public Ball(String name, int weight) {
		this.name = name;
		this.weight = weight;
	}
	
	public Ball(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}
}