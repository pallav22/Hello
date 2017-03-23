package com.hellokoding.auth.service;

import java.util.List;

import com.hellokoding.auth.model.Invoice;

public interface InvoiceService {
	
	public void save(List<Invoice> invoice);

	public List<Invoice> getAllInvoices();
	
	public Invoice getInvoiceById(int id);

}
