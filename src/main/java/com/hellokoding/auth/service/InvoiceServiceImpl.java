package com.hellokoding.auth.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hellokoding.auth.model.Invoice;
import com.hellokoding.auth.repository.InvoiceQueryRepository;
import com.hellokoding.auth.repository.InvoiceRepository;

@Service
public class InvoiceServiceImpl implements InvoiceService {

	@Autowired
	private InvoiceRepository invoiceRepository;

	@Autowired
	private InvoiceQueryRepository invoiceQueryRepository;
	
	@Override
	public void save(List<Invoice> invoice) {
		invoiceRepository.save(invoice);
	}

	@Override
	public List<Invoice> getAllInvoices() {
		List<Invoice> invoices = new ArrayList<Invoice>();
		invoiceRepository.findAll().forEach(invoices::add);

		return invoices;
	}

	@Override
	public Invoice getInvoiceById(int id) {
		return invoiceQueryRepository.findByinvoiceId(id);
	}

}
