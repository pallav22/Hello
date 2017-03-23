package com.hellokoding.auth.service;

import java.util.List;

import com.hellokoding.auth.model.Item;

public interface ItemService {
	public void save(List<Item> item);

	public List<Item> getAllItems();
	
	public List<Item> findByModel(String modelNumber);
	
	public List<Item> availableItemsInStock();

}
