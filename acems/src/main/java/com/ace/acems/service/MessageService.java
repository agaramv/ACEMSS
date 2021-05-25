package com.ace.acems.service;

import java.util.List;

import com.ace.acems.entity.MessageEntity;

public interface MessageService {
	
public List<MessageEntity> getMessageAll();
	
	public MessageEntity addContactMessage(MessageEntity messageEnitity);

}
