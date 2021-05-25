package com.ace.acems.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ace.acems.dao.MessageDao;
import com.ace.acems.entity.MessageEntity;

@Service
public class MessageServiceImpl implements MessageService{

	@Autowired
	private MessageDao messageDao;

	@Override
	public List<MessageEntity> getMessageAll() {
		return messageDao.getMessageAll();
	}

	@Override
	public MessageEntity addContactMessage(MessageEntity messageEnitity) {
		return messageDao.addContactMessage(messageEnitity);
	}
	
	
}
