package com.dev.migueloso.cardapio.dto;
import com.dev.migueloso.cardapio.entity.Cardapio;
import lombok.Data;


@Data
public class CardapioDtoTabelaForm {
   private Long codigo;
   private String nome;
   private String menu;
   
   public CardapioDtoTabelaForm(Cardapio cardapio) {
	   this.codigo = cardapio.getCodigo();
	   this.nome = cardapio.getNome();
	   this.menu = cardapio.getMenu();
   }
   
}
