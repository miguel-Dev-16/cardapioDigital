import { useEffect, useState } from 'react';
import './form_cardapio.css';
import axios from 'axios';
import Tabela from '../Tabela';
import Paginacao from '../Paginacao';

function Form_cardapio(){
    //atributos para cadastro
    const [linkImagem, setLinkImagem] = useState();
    const [nomeForm, setNomeForm] = useState();
    const [menu, setMenu] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState(); 
    
    //atributos para consultas e metodo de pesquisa por menu
    const [pesquisa, setPesquisa] = useState();

        //atributos para a páginação do sistema
        const [pagina,setPagina] = useState(1);

        //numero de registros vindo da api
        const registro = 5;
        const [numerRegistro, setNumeroRegistro] = useState();
    
        //array de dados
        const [dados, setDados] = useState([]);
    
    const pesquisaPorMenu = ()=>{
        const url = `http://localhost:8080/cardapio/listarporMenu?menu=${pesquisa}&pagina=${pagina}&registros=${registro}`;
        axios.get(url).then((response)=>{
            setDados(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }


    //dados api
    const url = `http://localhost:8080/cardapio?pagina=${pagina}&registros=${registro}`;
    const qtd_registros = 'http://localhost:8080/cardapio/qtd_registros';

    //user eEffect carregando os dados.
    useEffect(()=>{        
        axios.get(url).then((response)=>{
          setDados(response.data);
        })

        axios.get(qtd_registros).then((response)=>{
            setNumeroRegistro(response.data);
        })
    },[pagina,registro]);

    // Métodos:

    //método para recarregar a página.
    const reload = ()=>{
        window.location.reload();
    }
    
    //método para cadastrar o cardapio
    function cadastrarCardapio(){
        const cardapio = {
            nome:nomeForm,
            menu:menu,
            descricao:descricao,
            imagem:linkImagem,
            preco:preco
        }
        
        axios.post("http://localhost:8080/cardapio", cardapio)
        .then((response)=>{
            // console.log(response.data)
        }).catch((erro)=>{
            console.log(erro);
        });
    }
    
    //método para converter o valor de (,) para (.)  
     const convertPreco = (e)=>{
         const valorConvertido = e.target.value.replace(',','.');
         setPreco(valorConvertido); 
     }
    
     //  método para deletar cardapio
     function deletarCadapio(codigo){
        axios.delete(`http://localhost:8080/cardapio/${codigo}`)
        .then((response)=>{
        }).catch((error)=>{
            console.log(error);
        })
        //reload();
     }
         
    return(
        <>
           {/*formulário cadastro*/}
           <div className="container">
                <div>
                    <h1 className='centralizado mt-2'>Gestão Cardápio</h1>
                </div>
                <form className='' onSubmit={cadastrarCardapio}>
                    <div className="mb-3 col-6 centralizado mt-3">
                            <label htmlFor="nome_form" className="">Nome:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="nome_form"
                            onChange={(e)=>setNomeForm(e.target.value)}
                             />
                    </div>

                    <div className="col-6 centralizado">
                            <select className="form-select form-select-sm mb-3 " 
                            aria-label="menu_form"
                            onChange={(opcao)=> setMenu(opcao.target.value)}
                            >
                                    <option value="Selecione">Menu</option>
                                    <option value="ALMOCO">Almoço</option>
                                    <option value="SOBREMESA">Sobremesa</option>
                                    <option value="LANCHE">Lanche</option>
                            </select>
                    </div>

                    <div className="mb-3 col-6 centralizado mt-3">
                            <label htmlFor="preco" className="">Preço:</label>
                            <input 
                            type="text" 
                            className="form-control" 
                            id="preco"
                            onChange={convertPreco}
                             />
                    </div>
                    
                    <div className="form-floating mb-3 col-6 centralizado">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                        onChange={(texto) => setDescricao(texto.target.value)}
                        ></textarea>
                        <label htmlFor="floatingTextarea">Descrição:</label>
                    </div> {/* */}
                     
                    <div className="">
                        <div className="mb-3 col-6 centralizado">
                                <label htmlFor="imagem" className="nome">Link da imagem:</label>
                                <input type="text" className="form-control" id="imagem"
                                onChange={(e)=> setLinkImagem(e.target.value)} />
                        </div>
                        <div className="col-6 centralizado">
                            <div className='foto'>
                                  <img src={linkImagem} alt='foto' className='foto-dimensao'/>
                            </div>
                        </div>  
                    </div>
                    <div className='col-6 centralizado'>
                         <button type="submit" className="btn btn-success mt-3 mb-2 w-100">
                            Cadastrar
                         </button>
                    </div>
                </form>
           </div>

            {/*formulário pesquisa*/}
           <div className='container'>
                <form className='row card p-2'>
                    <div className='d-flex gap-2 justify-content-center'>

                        <div className="col-2">
                            <label htmlFor="codigo_pesquisa" className="">Código:</label>
                            <input type="text" className="form-control" id="codigo_pesquisa" />
                        </div>

                        <div className='col-5 mt-4'>
                            <select className="form-select" 
                            aria-label="menu_pesquisa" 
                            name='' 
                            onChange={(texto) => setPesquisa(texto.target.value)} >
                                <option value="Menu">Selecione</option>
                                <option value="Almoço">Almoço</option>
                                <option value="Sobremesa">Sobremesa</option>
                                <option value="Lanche">Lanche</option>
                            </select>
                        </div>

                        <div className='col-3 mt-4'>
                            <button type="button" className="btn btn-primary w-100" onClick={pesquisaPorMenu}>
                                Buscar
                            </button>
                        </div>
                    </div>            
                </form>
           </div>

            {/*tabela de exibição dos dados*/}
           <div className='container mt-2'>
               <Tabela 
                 pagina={pagina}
                 dados={dados}
                 deletar={deletarCadapio}
               />

            {/*-----------paginação --------*/}
              <Paginacao
                registro={registro}
                numerRegistro={numerRegistro}
                pagina={pagina}
                setPagina={setPagina}
              /> 
           </div>

        </>
    ); 
}
export default Form_cardapio;

