package com.ace.acems.service;

import java.util.List;
import java.util.Optional;

import com.ace.acems.entity.MessageEntity;

public interface MessageService {
	
public List<MessageEntity> getMessageAll();
	
	public MessageEntity addContactMessage(MessageEntity messageEnitity);
	
	public List<MessageEntity> getMessageByStatus(String status);


}
