package com.ace.acems.dao;

import java.util.List;
import java.util.Optional;

import com.ace.acems.entity.MessageEntity;

public interface MessageDao {

	public List<MessageEntity> getMessageAll();
	
	public MessageEntity addContactMessage(MessageEntity messageEnitity);
	
	public List<MessageEntity> getMessageByStatus(String status);
}
