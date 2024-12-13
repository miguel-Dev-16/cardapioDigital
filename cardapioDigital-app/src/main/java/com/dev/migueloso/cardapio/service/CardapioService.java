package com.dev.migueloso.cardapio.service;

import java.util.Comparator;
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
		return repository.findAllByOrderByCodigoAsc(PageRequest.of(pagina, registros));
	}
	
	//retorna o total de registros do cardapio
	public Integer qtdRegistro() {
	     List<Cardapio> registros = (List<Cardapio>) repository.findAll();
	     Integer qtd_registros = registros.size();
	     return qtd_registros;
	}
	
	public void deletar(Long codigo) {
	   Cardapio obj = repository.findById(codigo).get();
	   
	   if(Objects.isNull(obj)) {
        throw new IllegalArgumentException("Cardapio não existe na base de dados!");		   
	   }
	   
	   repository.deleteById(codigo);
	}
	
	public void atualizar(Cardapio obj) {
		if(Objects.isNull(obj)) {
			throw new IllegalArgumentException("Os dados informados vazio!");
		}
		repository.save(obj);
	}
	
	public List<Cardapio> buscarCardapioPorMenu(String menu) {
	  return repository.findByMenuLike(menu);
	}
	
	public List<Cardapio> buscaPorMenuPaginado(String menu, int pagina, int registros){
		return repository.findByMenuLike(menu, PageRequest.of(pagina, registros));
	}
	
	
	public Cardapio buscarPorId(Long codigo) {
		var cardapio = repository.findById(codigo).get();
		if(Objects.isNull(cardapio)) {
			throw new IllegalArgumentException("O objeto está nulo!");
		}
		return cardapio;
	}
	
	
}
