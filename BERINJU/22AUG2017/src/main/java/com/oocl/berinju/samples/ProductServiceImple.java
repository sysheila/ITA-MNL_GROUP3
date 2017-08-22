package com.oocl.berinju.samples;

import java.util.*;

public class ProductServiceImple {

	List<String> bookList = new ArrayList<>();
	List<String> musicList = new ArrayList<>();
	List<String> movieList = new ArrayList<>();
	List<String> fastFoodList = new ArrayList<>();
	
	public ProductServiceImple () {
		bookList.add("The Alchemist");
		bookList.add("War and peace");
		bookList.add("Snow white");
		
		musicList.add("Guns and Roses");
		musicList.add("Snoop dog");
		musicList.add("Maddona");
		
		movieList.add("God must be crazy");
		movieList.add("Six days and seven nights");
		movieList.add("American pie");
		
		fastFoodList.add("Hamburger");
		fastFoodList.add("Hotdog");
		fastFoodList.add("French fries");
	}

	public List<String> getProductCategories() {

		List<String> categories = new ArrayList<>();
		categories.add("Books");
		categories.add("Music");
		categories.add("Movies");
		categories.add("FastFood");
		return categories;
	}
	
	public List<String> getProducts (String category){
		switch (category.toLowerCase()) {
		case "books":
			return bookList;
		case "music":
			return musicList;
		case "movies":
			return movieList;
		case "fastFood":
			return fastFoodList;
		
		}
		return null;
		
	}
	
}
