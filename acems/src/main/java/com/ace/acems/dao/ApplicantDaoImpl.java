package com.ace.acems.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ace.acems.entity.ApplicantEntity;
import com.ace.acems.repository.ApplicantRepository;

@Service
public class ApplicantDaoImpl implements ApplicantDao{

	@Autowired
	ApplicantRepository applicantRepo;
	
	@Override
	public List<ApplicantEntity> getApplicantsByStatus(String status) {
		return applicantRepo.getApplicantsByStatus(status);
	}

	
	
}
