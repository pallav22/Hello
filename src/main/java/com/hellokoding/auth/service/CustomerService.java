package com.hellokoding.auth.service;

import java.util.List;

import com.hellokoding.auth.model.Customer;


public interface CustomerService {
	void save(Customer brand);

	public List<Customer> getAllCustomer();
	public List<Customer> findByMobile(String name);
	
	public Customer findCustomerById(Long id);

}
