package com.dev.migueloso.cardapio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.dev.migueloso.cardapio.entity.Cardapio;
import com.dev.migueloso.cardapio.service.CardapioService;

@RestController
@RequestMapping("/cardapio")
public class CardapioController {
	
	@Autowired
	private CardapioService service;
    
	@CrossOrigin(origins="*", allowedHeaders = "*")
	@PostMapping
	public ResponseEntity<Cardapio> salvarCardapio(@RequestBody Cardapio obj) {
		return ResponseEntity.ok().body(service.cadastrar(obj));
	}
	
}
