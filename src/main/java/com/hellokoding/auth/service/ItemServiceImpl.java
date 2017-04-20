package com.hellokoding.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellokoding.auth.model.Item;
import com.hellokoding.auth.repository.ItemQueryRepository;
import com.hellokoding.auth.repository.ItemRepository;

@Service
public class ItemServiceImpl implements ItemService {

	
	@Autowired
	private ItemRepository  itemRepository;
	
	@Autowired
	ItemQueryRepository itemQueryRepository;
	
	@Override
	public void save(List<Item> item) {
		itemRepository.save(item);
	}

	@Override
	public List<Item> getAllItems() {
		List<Item> items = new ArrayList<Item>();
		itemRepository.findAll().forEach(items::add);
		
		return items;
	}

	@Override
	public List<Item> findByModel(String modelNumber) {
		return itemQueryRepository.findByModel(modelNumber);
	}

	@Override
	public List<Item> availableItemsInStock() {
		List<Item> items = new ArrayList<Item>();
		itemQueryRepository.inStock().forEach(items::add);
		return items;
	}
	
	@Override
    public int itemsInStockCount(String status) {
        int value = Integer.parseInt(status);
        return itemQueryRepository.availableStockCount(value);

    }

}
