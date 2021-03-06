package com.hellokoding.auth.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.validation.constraints.NotNull;

/**
 * @author Prashant
 *
 */
@Entity
@NamedQuery(name = "Invoice.findByinvoiceId", query = "SELECT i FROM Invoice i WHERE i.invoiceId = ?1")
public class Invoice {
	
	private int invoiceId;
	private Customer customer;
	private List<Item> item;
	private String date;
	private String agentName;
	private String soldLocation;

	@Column(name="invStatus", columnDefinition="varchar2(1) DEFAULT 'available'")
	private String invStatus;
	

	//private String cancelReason;
	
	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@ManyToMany
	@JoinColumn(name = "item_id", nullable = false)
	public List<Item> getItem() {
		return item;
	}

	public void setItem(List<Item> item) {
		this.item = item;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	public int getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getAgentName() {
		return agentName;
	}

	public void setAgentName(String agentName) {
		this.agentName = agentName;
	}

	public String getSoldLocation() {
		return soldLocation;
	}

	public void setSoldLocation(String soldLocation) {
		this.soldLocation = soldLocation;
	}

	public String getInvStatus() {
		return invStatus;
	}

	public void setInvStatus(String invStatus) {
		this.invStatus = invStatus;
	}

	/*public String getCancelReason() {
		return cancelReason;
	}

	public void setCancelReason(String cancelReason) {
		this.cancelReason = cancelReason;
	}*/

	
	
	
}
