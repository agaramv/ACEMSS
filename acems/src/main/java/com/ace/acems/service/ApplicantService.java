package com.ace.acems.service;

import java.util.List;

import com.ace.acems.entity.ApplicantEntity;

public interface ApplicantService {

	List<ApplicantEntity> getAllAplicants();
	
	ApplicantEntity addApplicant(ApplicantEntity applicantEntity);
	
	List<ApplicantEntity> getApplicantsByStatus(String status);
}
