package com.dev.migueloso.cardapio.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
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
	
	/*no meu findAll ele espera um pageble como parametro e uma das formas de criar um pageble
	 * como parametro é passando um PageRequest.of(int, int) e ele espera dois inteiros como parametro
	 * que é o numero da página que se inicia com 0 e a quantidades de registros que vai ser carregado.*/
	
	public List<Cardapio> listarCardapio(int pagina, int registros){
		return repository.findAll(PageRequest.of(pagina, registros));
	}
	
}