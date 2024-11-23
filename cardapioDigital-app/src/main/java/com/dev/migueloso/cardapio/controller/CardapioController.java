package com.dev.migueloso.cardapio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	
	@CrossOrigin(origins="*", allowedHeaders = "*")
	@GetMapping
	public ResponseEntity<List<Cardapio>> listarCardapioPaginacao(@RequestParam int pagina,
												   @RequestParam int registros){
		//como a primeira posição é 0 tem que ser o numero -1.
		pagina = (pagina - 1);
	  return ResponseEntity.ok().body(service.listarCardapio(pagina, registros));
	}
	
	@CrossOrigin(origins="*", allowedHeaders = "*")
	@GetMapping("/qtd_registros")
	public ResponseEntity<Integer> quantidadeRegistros(){
		return ResponseEntity.ok().body(service.qtdRegistro());
	}
	
	@CrossOrigin(origins="*", allowedHeaders = "*")
	@DeleteMapping("/{codigo}")
	public ResponseEntity<Void> excluirCardapio(@PathVariable Long codigo){
		service.deletar(codigo);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
	
	// testar amanhã
	@CrossOrigin(origins="*", allowedHeaders = "*")
	@GetMapping("/listaMenu")
	public ResponseEntity<List<Cardapio>> listarPorMenu(@RequestParam String menu){
		return ResponseEntity.status(HttpStatus.OK).body(service.buscarCardapioPorMenu(menu));
	}
	
	
	
}
