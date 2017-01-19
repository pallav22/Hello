package com.se.auth.service;

import java.util.List;

import com.se.auth.model.Brand;

public interface BrandService {
	void save(Brand brand);

	public List<Brand> getAllBrand();

}
