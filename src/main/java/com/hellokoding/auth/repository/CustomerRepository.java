package com.hellokoding.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hellokoding.auth.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
   // Customer findByUsername(String username);


}
