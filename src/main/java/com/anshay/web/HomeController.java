package com.anshay.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.anshay.response.MarsRoverApiResponse;
import com.anshay.service.MarsRoverApiService;

import io.micrometer.common.util.StringUtils;



@Controller
public class HomeController {
	
	@Autowired
	private MarsRoverApiService roverService;

	@GetMapping("/")
	public String getHomeView(ModelMap model, @RequestParam(required=false) String marsApiRoverData,
			                  @RequestParam(required=false) Integer marsSol, 
			                  @RequestParam(required=false) Boolean defaultCheck1) {
		
		if(StringUtils.isEmpty(marsApiRoverData)) {
			marsApiRoverData = "curiosity";
		}
		
		if(marsSol==null) {
			marsSol = 1;
		}
		
		MarsRoverApiResponse roverData = roverService.getRoverData(marsApiRoverData, marsSol);
		
		model.put("roverData", roverData);
		
		return "index";
	}
	
	
	
}
