package com.se.auth.service;

import java.util.List;

import com.se.auth.model.Customer;

public interface CustomerService {
	void save(Customer brand);

	public List<Customer> getAllCustomer();

}
