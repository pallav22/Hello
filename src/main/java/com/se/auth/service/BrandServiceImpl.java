package com.se.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.se.auth.model.Brand;
import com.se.auth.repository.BrandsRepository;

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
