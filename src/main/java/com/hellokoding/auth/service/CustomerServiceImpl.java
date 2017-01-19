package com.hellokoding.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellokoding.auth.model.Customer;
import com.hellokoding.auth.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	CustomerRepository customerRepository;
	
	@Override
	public void save(Customer brand) {
		customerRepository.save(brand);	
	}

	@Override
	public List<Customer> getAllCustomer() {
		List<Customer> brands = new ArrayList<Customer>();
		customerRepository.findAll().forEach(brands::add);
		
		return brands;
	}
}
