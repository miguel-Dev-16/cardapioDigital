package com.dev.migueloso.cardapio.entity;

import com.dev.migueloso.cardapio.Enum.MenuEnum;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tbl_cardapio")
public class Cardapio {
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
 	private Long codigo;
	
 	private MenuEnum menu;
 	
 	@Column(nullable = false)
	private Double preco;
 	
 	@Column(nullable = false, unique=true)
	private String nome;
 	
 	@Column(nullable = false)
	private String descricao;
 	
 	@Column(nullable = false)
	private String imagem;
	
	
}
