package com.hellokoding.auth.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.hellokoding.auth.model.Item;;

public interface ItemQueryRepository extends Repository<Item, Long> { 
	
	
	List<Item> findByModel(String modelNumber);
	
	List<Item> inStock();


}
