package com.oocl.kadange.ex;

import java.util.List;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class ProductCatalogue {
	
	ProductServiceImple productService = new ProductServiceImple();

	@WebMethod
	public List<String> getProductCategories() {
		return productService.getProductCategories();
	}

	public List<String> getProducts(String category) {
		return productService.getProducts(category);
	}

}
