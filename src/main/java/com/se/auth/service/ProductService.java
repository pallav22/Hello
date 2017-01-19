package com.se.auth.service;

import java.util.List;

import com.se.auth.model.Product;

public interface ProductService {
	public void save(Product product);

	public List<Product> getAllProduct();
}
