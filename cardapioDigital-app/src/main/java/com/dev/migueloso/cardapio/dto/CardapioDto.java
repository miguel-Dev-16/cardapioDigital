package com.dev.migueloso.cardapio.dto;

import com.dev.migueloso.cardapio.entity.Cardapio;

import lombok.Data;

@Data
public class CardapioDto {
    
	private Long codigo;
	
 	private String menu;
 	
	private Double preco;
 	
	private String nome;
 	
	private String descricao;
 	
	private String imagem;
	
	public CardapioDto(Cardapio entidade) {
		setMenu(entidade.getMenu());
		setPreco(entidade.getPreco());
		setNome(entidade.getNome());
		setDescricao(entidade.getDescricao());
		setImagem(entidade.getImagem());
	}
}
