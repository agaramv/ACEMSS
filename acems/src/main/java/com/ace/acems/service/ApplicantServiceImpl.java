package com.ace.acems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ace.acems.entity.ApplicantEntity;
import com.ace.acems.repository.ApplicantRepository;

@Service
public class ApplicantServiceImpl implements ApplicantService{
	
	@Autowired
	ApplicantRepository applicantRepo;

	@Override
	public List<ApplicantEntity> getAllAplicants() {
		return applicantRepo.findAll();
	}

	@Override
	public ApplicantEntity addApplicant(ApplicantEntity applicantEntity) {
		// TODO Auto-generated method stub
		return applicantRepo.saveAndFlush(applicantEntity);
	}

}
