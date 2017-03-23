package com.hellokoding.auth.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hellokoding.auth.model.Customer;
import com.hellokoding.auth.model.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
	
	//Invoice findInvoideById(int id);

}
