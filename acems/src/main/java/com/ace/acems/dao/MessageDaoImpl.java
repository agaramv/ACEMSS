package com.ace.acems.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ace.acems.entity.MessageEntity;
import com.ace.acems.repository.MessageRepository;

@Service
public class MessageDaoImpl implements MessageDao{

	@Autowired
	MessageRepository messageRepo;
	
	@Override
	public List<MessageEntity> getMessageAll() {
		return messageRepo.findAll();
	}

	@Override
	public MessageEntity addContactMessage(MessageEntity messageEnitity) {
		return messageRepo.saveAndFlush(messageEnitity);
	}

}
