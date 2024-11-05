package com.dev.migueloso.cardapio.dto;

import lombok.Data;

@Data
public class CardapioDtoModal {
  
	private Long codigo;
	
 	private String menu;
 	
	private Double preco;
 	
	private String nome;
 	
	private String descricao;
 	
	private String imagem;
		
}
