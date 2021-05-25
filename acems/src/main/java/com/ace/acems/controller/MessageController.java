package com.ace.acems.controller;

import java.util.List;

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
	
	@PostMapping("message/add")
	public MessageEntity addContactMessage(@RequestBody MessageEntity messageEntity) {
		return messageService.addContactMessage(messageEntity);
	}
}
