package com.oocl.kadange.ex;

import java.util.ArrayList;
import java.util.List;

public class ProductServiceImple {

	List<String> bookList = new ArrayList<String>();
	List<String> musicList = new ArrayList<String>();
	List<String> movieList = new ArrayList<String>();
	List<String> fastFoodList = new ArrayList<String>();

	public ProductServiceImple() {
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

		List<String> categories = new ArrayList<String>();
		categories.add("Books");
		categories.add("Music");
		categories.add("Movies");
		categories.add("FastFood");
		return categories;
	}

	public List<String> getProducts(String category) {
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
