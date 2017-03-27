package com.hellokoding.auth.web;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hellokoding.auth.model.Brand;
import com.hellokoding.auth.model.Customer;
import com.hellokoding.auth.model.Godown;
import com.hellokoding.auth.model.Invoice;
import com.hellokoding.auth.model.Item;
import com.hellokoding.auth.model.Product;
import com.hellokoding.auth.service.BrandService;
import com.hellokoding.auth.service.CustomerService;
import com.hellokoding.auth.service.GodownService;
import com.hellokoding.auth.service.InvoiceService;
import com.hellokoding.auth.service.ItemService;
import com.hellokoding.auth.service.ProductService;
//import io.swagger.annotations.Api;

//@Api(value="Admin", description="only admin can access", basePath="/adminController",produces = "application/json")
@RestController
@RequestMapping("adminController")
public class AdminController {
	
	@Autowired
	ItemService itemService;

	@RequestMapping(value = "/api/brands", method = RequestMethod.GET)
	public String getAllItems() {
		return "Admin";

	}

	@ApiOperation(value = "Get all item", notes = "Get all list of item")
	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "Success", response = List.class),
			@ApiResponse(code = 401, message = "Unauthorized"),
			@ApiResponse(code = 403, message = "Forbidden"),
			@ApiResponse(code = 404, message = "Not Found"),
			@ApiResponse(code = 500, message = "Failure") })
	@RequestMapping(value = "/api/items", method = RequestMethod.GET)
	public List<Item> getAllItem() {

		return itemService.getAllItems();
	}

}
