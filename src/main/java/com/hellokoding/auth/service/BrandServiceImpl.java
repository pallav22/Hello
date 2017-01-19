package com.hellokoding.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellokoding.auth.model.Brand;
import com.hellokoding.auth.repository.BrandsRepository;

@Service
public class BrandServiceImpl implements BrandService {

	@Autowired
	private BrandsRepository  barndRepository;
	
	@Override
	public void save(Brand brand) {
		barndRepository.save(brand);	
	}

	@Override
	public List<Brand> getAllBrand() {
			List<Brand> brands = new ArrayList<Brand>();
			barndRepository.findAll().forEach(brands::add);
			
			return brands;
		}
}
