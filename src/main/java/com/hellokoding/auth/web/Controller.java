package com.hellokoding.auth.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
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

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(value="User Controller", description="Operations on user", basePath="/userController",produces = "application/json")
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
	
	
	@Autowired
	ItemService itemservice;
	
	@Autowired
	ItemService itemService;
	
	
	@Autowired
	InvoiceService invoiceService;
	
	@ApiOperation(value = "Get all brand", notes = "Get All Brands")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")}) 
	@RequestMapping(value = "/api/brands", method = RequestMethod.GET)
	public List<Brand> getAllBrands() {
		return brandService.getAllBrand();

	}

	@ApiOperation(value = "Add brand", notes = "Add new brand")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")}) 
	@RequestMapping(value = "/api/brands", method = RequestMethod.POST)
	public String add(@RequestBody Brand brand) {

		try {
			brandService.save(brand);
		} catch (Exception ex) {
			return "Error inserting the Brand!! ";
		}
		return "Brand succesfully added!";
	}

	@RequestMapping(value = "/api/productswithbrands", method = RequestMethod.GET)
	public List<Product> getAllProducts() {
		return productService.getAllProduct();
	}
	
	// find product by brandId
	@ApiOperation(value = "Get product by brand id", notes = "Get all product by brand id")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/products", method = RequestMethod.GET)
	public List<Product> getAllProduct(@RequestParam(value = "brandId", required = true) String brandId) {
		System.out.println(brandId);
		return productService.getProductById(Long.parseLong(brandId));
	}

	
	@ApiOperation(value = "Add product", notes = "Add new product")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})	@RequestMapping(value = "/api/products", method = RequestMethod.POST)
	public String add(@RequestBody Product product) {

		try {
			productService.save(product);
		} catch (Exception ex) {
			return "Error inserting the Product!!" ;
		}
		return "Product succesfully added!";
	}

	@ApiOperation(value = "Get godown", notes = "Get all godown")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/godowns", method = RequestMethod.GET)
	public List<Godown> getAllGodownt() {
		return godownService.getAllGodown();
	}

	
	@ApiOperation(value = "Add new godown", notes = "Add Godown")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@ResponseStatus(HttpStatus.OK)
	@RequestMapping(value = "/api/godowns", method = RequestMethod.POST)
	public String add(@RequestBody Godown godown) {
		try {
			godownService.save(godown);
		} catch (Exception ex) {
			return "Error inserting the Godown!!";
		}
		return "Godown succesfully added!";
	}

	@ApiOperation(value = "Get all customer", notes = "All Customer list")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/customer", method = RequestMethod.GET)
	public List<Customer> getAllCustomer() {

		return custservice.getAllCustomer();
	}

	
	@ApiOperation(value = "Get customer by Id", notes = "Get customer by id")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/customerid", method = RequestMethod.GET)
	public Customer getCustomerById(@RequestParam(value = "id", required = true) String id) {

		return custservice.findCustomerById(Long.parseLong(id));
	}
	
	
	
	@ApiOperation(value = "Add customer ", notes = "Save new customer")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/customer", method = RequestMethod.POST)
	public void addCustomer(@RequestBody Customer cust) {
		System.out.println(cust.getEmail());
		System.out.println(cust.getPrefix());
		custservice.save(cust);
	}
	
	//update customer
	@RequestMapping(value = "/api/customer", method = RequestMethod.PUT)
	public void updateCustomer(@RequestBody Customer cust) {
		custservice.save(cust);
	}
	
	

	@ApiOperation(value = "Get all item available in Stock", notes = "Get all item available in Stock")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/items", method = RequestMethod.GET)
	public List<Item> getAllItemInStock() {

		return itemService.availableItemsInStock();
	}
	
	
	@ApiOperation(value = "Save items list", notes = "Save items")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/items", method = RequestMethod.POST)
	public void addItems(@RequestBody List<Item> items) {

		itemService.save(items);
	}
	
	// Update items table status
	@RequestMapping(value = "/api/items", method = RequestMethod.PUT)
	public void updateItemStatus(@RequestBody List<Item> items) {

		itemService.save(items);
	}
	
	
	// Save bill report
	@ApiOperation(value = "Save Invoice report", notes = "Save Generated Bill report")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/invoice", method = RequestMethod.POST)
	public void saveGeneratedBill(@RequestBody List<Invoice> invoice) {

		invoiceService.save(invoice);
	}

	
	@ApiOperation(value = "Get all Invoice Details", notes = "Get all Invoice report")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/invoice", method = RequestMethod.GET)
	public List<Invoice> getInvoiceReport() {

		return invoiceService.getAllInvoices();
	}
	
	@ApiOperation(value = "Get Invoice by Id", notes = "Get Inoice by id")
	@ApiResponses(value = { 
            @ApiResponse(code = 200, message = "Success", response = List.class),
            @ApiResponse(code = 401, message = "Unauthorized"),
            @ApiResponse(code = 403, message = "Forbidden"),
            @ApiResponse(code = 404, message = "Not Found"),
            @ApiResponse(code = 500, message = "Failure")})
	@RequestMapping(value = "/api/invoiceid", method = RequestMethod.GET)
	public Invoice getInvoiceDetailsById(@RequestParam(value = "id", required = true) String id) {

		return invoiceService.getInvoiceById(Integer.parseInt(id));
	}
	
		
	
	
	
	
	@RequestMapping(value = "/search/customer", method = RequestMethod.GET)
	public List<Customer> getCustomerByName(@RequestParam(value = "mobile", required = true) String mobile) {
		System.out.println(mobile);
		//System.out.println(Integer.parseInt(mobile.toString()));
		List<Customer> Customers = custservice.findByMobile(mobile);
		return Customers;
	}
	
	
	@RequestMapping(value = "/search/items", method = RequestMethod.GET)
	public List<Item> getItemsByModel(@RequestParam(value = "modelNumber", required = true) String modelNumber) {
		System.out.println(modelNumber);
		//System.out.println(Integer.parseInt(mobile.toString()));
		List<Item> items = itemservice.findByModel(modelNumber);
		return items;
	}
	
	
}
