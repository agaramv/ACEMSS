package com.ace.acems.dao;

import java.util.List;

import com.ace.acems.entity.ApplicantEntity;

public interface ApplicantDao {

	List<ApplicantEntity> getApplicantsByStatus(String status);
}
