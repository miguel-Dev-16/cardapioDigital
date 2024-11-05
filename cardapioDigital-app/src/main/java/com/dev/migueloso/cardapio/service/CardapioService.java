package com.dev.migueloso.cardapio.service;

import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.dev.migueloso.cardapio.entity.Cardapio;
import com.dev.migueloso.cardapio.repository.CardapioRepository;

@Service
public class CardapioService {
    
	@Autowired
	private CardapioRepository repository;
	
	public Cardapio cadastrar(Cardapio obj) {
		if(Objects.isNull(obj)) {
			throw new IllegalArgumentException("O objeto está nulo!");
		}
		
		return repository.save(obj);
	}
	
}
