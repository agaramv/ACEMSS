package com.ace.acems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ace.acems.entity.ApplicantEntity;
import com.ace.acems.service.ApplicantService;

@CrossOrigin(origins = "*", allowedHeaders = "*")


@RestController
public class ApplicantController {

	@Autowired
	ApplicantService applicantService;
	
	@GetMapping("/applicant/all")
	public List<ApplicantEntity> getAllApplicants() {
		return applicantService.getAllAplicants();
	}
	
	@PostMapping("/applicant/add")
	public ApplicantEntity addApplicant(@RequestBody ApplicantEntity applicantEntity) {
		return applicantService.addApplicant(applicantEntity);
	}
	
}
