package com.se.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.se.auth.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
   // Customer findByUsername(String username);


}
