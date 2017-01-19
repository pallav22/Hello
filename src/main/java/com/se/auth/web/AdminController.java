package com.se.auth.web;


import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("adminController")
public class AdminController {

	@RequestMapping(value = "/api/brands",method = RequestMethod.GET)
	public String getAllItems() {
		return "Admin";

	}
	
	
}
