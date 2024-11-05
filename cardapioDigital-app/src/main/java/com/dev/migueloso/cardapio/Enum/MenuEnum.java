package com.dev.migueloso.cardapio.Enum;

public enum MenuEnum {
   LANCHE("Lanche"), ALMOCO("Almoço"), SOBREMESA("Sobremesa");
   	
   private String tipoMenu;
   
   private MenuEnum(String tipo) {
	   this.tipoMenu = tipo;
   }
   
   public String getTipoMenu() {
	   return this.tipoMenu;
   }
   
}
