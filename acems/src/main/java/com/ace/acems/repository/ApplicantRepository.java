package com.ace.acems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ace.acems.entity.ApplicantEntity;

public interface ApplicantRepository extends JpaRepository<ApplicantEntity, String>{

}
