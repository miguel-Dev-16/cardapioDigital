import { useEffect, useState} from 'react';
import React, {useRef} from 'react';
import axios from 'axios';
import './tabela.css';

function Tabela(
    {pagina, dados, deletar}){
        //atributos atualização
        const useRefImagem = useRef(null);
    
        //vou usar para iniciar o objeto
        const[cardapio,setCardapio]= useState({});
       
        //pega o valor da tabela e chama a api
        const Modal = (codigo)=>{
            const url = `http://localhost:8080/cardapio/consultar/${codigo}`;
            axios.get(url).then((response)=>{
                setCardapio(response.data);
            }).catch((error)=>{
                console.log(error);
            })
        }

       //métodos
       const atualizar = (e)=>{
         e.preventDefault();
         const cardapio = {
            codigo: e.target.elements.codigo.value,
            nome:   e.target.elements.nome.value,
            menu:   e.target.elements.menu.value.toUpperCase(),
            preco:  e.target.elements.preco.value,
            descricao: e.target.elements.descricao.value,
            imagem: useRefImagem.current.value
         };

         axios.put("http://localhost:8080/cardapio/atualizar",cardapio)
         .then((response)=>{
            console.log('sucesso:', response.data);
         }).catch((error)=>{
            console.log(error);
         })
       };

   return(
      <>
      <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Menu</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                      {dados.map((item)=>(
                        <tr key={item.codigo}>
                        <td>{item.codigo}</td>
                        <td>
                            <span className="cursor"
                            data-bs-toggle="modal" 
                            data-bs-target="#modal" onClick={()=>Modal(item.codigo)}>
                               {item.nome}
                            </span>
                        </td>
                        <td>{item.menu}</td>
                        <td>
                            <a href='' onClick={()=>deletar(item.codigo)} className='p-2'>
                                <i className="bi bi-trash3-fill text-danger"></i>
                            </a>
                            <span className="cursor"
                            data-bs-toggle="modal" 
                            data-bs-target="#atualizacao"
                            onClick={()=>Modal(item.codigo)}>
                                <i className="bi bi-pencil-fill text-primary "></i>
                            </span>
                        </td>
                        </tr>
                      ))}
                    </tbody>
                </table>

              {/* <!-- Modal Exibição--> */}
              <div className="modal fade" id="modal" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modal">{cardapio.menu}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="card width:18rem">
                                <img src={cardapio.imagem} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{cardapio.nome}</h5>
                                    <p className="card-text">{cardapio.descricao}</p>
                                    <p className="card-text">R$ {cardapio.preco}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                </div>

                 {/* <!-- Modal Atualização--> */}
                 <div className="modal fade" id="atualizacao" tabindex="-1" aria-labelledby="modal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="modal">Atualização Cardapio</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='container'>
                                    <form onSubmit={atualizar}>
                                        <div className='mb-1'>
                                            <label htmlFor="disabledTextInput" className="form-label">Código:</label>
                                            <input type="text" 
                                            id="codigo" 
                                            className="form-control" 
                                            placeholder="Código"
                                            name='codigo'
                                            disabled
                                            defaultValue={cardapio.codigo}
                                            />
                                        </div>

                                        <div className='mb-2'>
                                            <label htmlFor="disabledTextInput" className="form-label">Nome:</label>
                                            <input type="text" 
                                            id="nome" 
                                            className="form-control" 
                                            placeholder="Nome"
                                            name='nome'
                                            defaultValue={cardapio.nome}
                                            />
                                        </div>

                                        <select className="form-select form-select-sm mb-3 " 
                                    aria-label="menu_form"
                                    name='menu'
                                    >
                                            <option value={cardapio.menu}>{cardapio.menu}</option>
                                            <option value="ALMOCO">Almoço</option>
                                            <option value="SOBREMESA">Sobremesa</option>
                                            <option value="LANCHE">Lanche</option>
                                    </select>

                                    <div className='mb-2'>
                                            <label htmlFor="disabledTextInput" className="form-label">Preço:</label>
                                            <input type="text" 
                                            id="preco" 
                                            className="form-control" 
                                            placeholder="Preço"
                                            name='preco'
                                            defaultValue={cardapio.preco}
                                            />
                                        </div>

                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                            name='descricao'
                                            defaultValue={cardapio.descricao}
                                            ></textarea>
                                            <label htmlFor="floatingTextarea">Descrição:</label>
                                        </div>

                                        <div className="">
                                            <div className="mb-3">
                                                    <label htmlFor="imagem" className="nome">Link da imagem:</label>
                                                    <input type="text" className="form-control" id="imagem"
                                                     name='imagem'
                                                     defaultValue={cardapio.imagem}
                                                     ref={useRefImagem}
                                                      />
                                            </div>
                                            <div className="mb-3">
                                                <div className='foto'>
                                                    <img src={cardapio.imagem} alt='foto' className='foto-dimensao'/>
                                                </div>
                                            </div>  
                                        </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                            Fechar
                                        </button>
                                        <button type="submit" className="btn btn-primary">
                                            Salvar
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
      </>
   );
}
export default Tabela;