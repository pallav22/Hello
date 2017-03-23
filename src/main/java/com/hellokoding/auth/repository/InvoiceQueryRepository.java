package com.hellokoding.auth.repository;

import org.springframework.data.repository.Repository;

import com.hellokoding.auth.model.Invoice;

public interface InvoiceQueryRepository extends Repository<Invoice, Long> {
	Invoice findByinvoiceId(int invoiceId);

}
