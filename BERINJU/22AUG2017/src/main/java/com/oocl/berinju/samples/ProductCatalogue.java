package com.oocl.berinju.samples;

import java.util.*;
import javax.jws.WebMethod;
import javax.jws.WebService;

import com.oocl.berinju.samples.*;

@WebService
public class ProductCatalogue {
	
	ProductServiceImple  productService = new ProductServiceImple();

	@WebMethod
	public List<String> getProductCategories() {
		//return productService.getProductCategories();
		List<String> categories = new ArrayList<>();
		categories.add("Books");
		categories.add("Music");
		categories.add("Movies");
		categories.add("FastFood");
		return categories;
	}
	
	  public List<String> getProducts(String category){
		  return productService.getProducts(category);
	  }
}
