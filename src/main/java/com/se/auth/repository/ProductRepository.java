package com.se.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.se.auth.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
