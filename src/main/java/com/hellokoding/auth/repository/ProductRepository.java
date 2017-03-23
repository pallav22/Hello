package com.hellokoding.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hellokoding.auth.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findByBrandId(long bId);


}
