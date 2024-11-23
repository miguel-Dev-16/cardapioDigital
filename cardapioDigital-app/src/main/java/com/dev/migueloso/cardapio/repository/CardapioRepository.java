package com.dev.migueloso.cardapio.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.dev.migueloso.cardapio.entity.Cardapio;


public interface CardapioRepository extends CrudRepository<Cardapio, Long>{
  //não sei pq mais procurar verificar pois da erro quando coloco a interface JpaRepository para se 
  //trabalhar com o Pageable, por isso coloquei o CrudRepository. verificar a diferença dos dois.
   List<Cardapio> findAll(Pageable pagina);
   
   List<Cardapio> findByMenuLike(String menu);
}
