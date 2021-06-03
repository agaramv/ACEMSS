package com.ace.acems.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ace.acems.entity.MessageEntity;
import com.ace.acems.service.MessageService;

@CrossOrigin(origins = "*", allowedHeaders = "*")

@RestController
public class MessageController {

	@Autowired
	MessageService messageService;
	
	@GetMapping("/message/all")
	public List<MessageEntity> getMessagesAll(){
		return messageService.getMessageAll();
	}
	
	@GetMapping("/message/unread")
	public List<MessageEntity> getUnreadMessages(){
		return messageService.getMessageByStatus("U");
	}
	@GetMapping("/message/read")
	public List<MessageEntity> getReadMessages(){
		return messageService.getMessageByStatus("R");
	}
	
	@PostMapping("message/add")
	public MessageEntity addContactMessage(@RequestBody MessageEntity messageEntity) {
		return messageService.addContactMessage(messageEntity);
	}
}
