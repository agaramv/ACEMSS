package com.ace.acems.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ace.acems.entity.MessageEntity;

@Repository
public interface MessageRepository extends JpaRepository<MessageEntity, Integer>{

	@Query(value="SELECT * FROM ace_contact_message WHERE status= :type",nativeQuery=true)
	List<MessageEntity> getMessagesByStatus(@Param("type") String status);
}
