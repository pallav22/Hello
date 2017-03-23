package com.hellokoding.auth.web;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import io.swagger.annotations.Api;

//@Api(value="Admin", description="only admin can access", basePath="/adminController",produces = "application/json")
@RestController
@RequestMapping("adminController")
public class AdminController {

	@RequestMapping(value = "/api/brands",method = RequestMethod.GET)
	public String getAllItems() {
		return "Admin";

	}
	
	
}
