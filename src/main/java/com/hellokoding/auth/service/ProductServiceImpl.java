package com.hellokoding.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellokoding.auth.model.Product;
import com.hellokoding.auth.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	private ProductRepository  productRepository;
	
	@Override
	public void save(Product product) {
		productRepository.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		List<Product> products = new ArrayList<Product>();
		productRepository.findAll().forEach(products::add);
		
		return products;
	}

}
