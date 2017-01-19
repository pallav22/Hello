package com.hellokoding.auth.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hellokoding.auth.model.Brand;
import com.hellokoding.auth.model.Customer;
import com.hellokoding.auth.model.Godown;
import com.hellokoding.auth.model.Product;
import com.hellokoding.auth.service.BrandService;
import com.hellokoding.auth.service.CustomerService;
import com.hellokoding.auth.service.GodownService;
import com.hellokoding.auth.service.ProductService;

@RestController
@RequestMapping("userController")
public class Controller {

	@Autowired
	private BrandService brandService;

	@Autowired
	private ProductService productService;

	@Autowired
	private GodownService godownService;

	@Autowired
	CustomerService custservice;

	@RequestMapping(value = "/api/brands", method = RequestMethod.GET)
	public List<Brand> getAllItems() {
		return brandService.getAllBrand();

	}

	@RequestMapping(value = "/api/brands", method = RequestMethod.POST)
	public String add(@RequestBody Brand brand) {

		try {
			brandService.save(brand);
		} catch (Exception ex) {
			return "Error inserting the Brand: " + ex.toString();
		}
		return "Brand succesfully added!";
	}

	@RequestMapping(value = "/api/products", method = RequestMethod.GET)
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@RequestMapping(value = "/api/products", method = RequestMethod.POST)
	public String add(@RequestBody Product product) {

		try {
			productService.save(product);
		} catch (Exception ex) {
			return "Error inserting the Product: " + ex.toString();
		}
		return "Product succesfully added!";
	}

	@RequestMapping(value = "/api/godowns", method = RequestMethod.GET)
	public List<Godown> getAllGodownt() {
		return godownService.getAllGodown();
	}

	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/api/godowns", method = RequestMethod.POST)
	public String add(@RequestBody Godown godown) {
		try {
			godownService.save(godown);
		} catch (Exception ex) {
			return "Error inserting the Godown: " + ex.toString();
		}
		return godown.getGodownName() + "Godown succesfully added!";
	}

	@RequestMapping(value = "/api/customer", method = RequestMethod.GET)
	public List<Customer> getAllCustomer() {

		return custservice.getAllCustomer();
	}

	@RequestMapping(value = "/api/customer", method = RequestMethod.POST)
	public void addCustomer(@RequestBody Customer cust) {

		custservice.save(cust);
	}

}
