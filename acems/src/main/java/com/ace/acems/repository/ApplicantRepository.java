package com.ace.acems.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ace.acems.entity.ApplicantEntity;
import com.ace.acems.entity.MessageEntity;

public interface ApplicantRepository extends JpaRepository<ApplicantEntity, String>{

	@Query(value="SELECT * FROM ace_application WHERE status= :type",nativeQuery=true)
	List<ApplicantEntity> getApplicantsByStatus(@Param("type") String status);
}
