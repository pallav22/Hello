package com.hellokoding.auth.service;

import java.util.List;

import com.hellokoding.auth.model.Brand;

public interface BrandService {
	void save(Brand brand);

	public List<Brand> getAllBrand();

}
