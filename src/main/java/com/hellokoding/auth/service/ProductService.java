package com.hellokoding.auth.service;

import java.util.List;

import com.hellokoding.auth.model.Product;

public interface ProductService {
	public void save(Product product);

	public List<Product> getAllProduct();
	
	public List<Product> getProductById(long brandId);
}
