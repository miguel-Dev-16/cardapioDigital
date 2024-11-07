import { useEffect, useState } from 'react';
import './form_cardapio.css';
import axios from 'axios';


function Form_cardapio(){
    //atributos para cadastro
    const [linkImagem, setLinkImagem] = useState();
    const [nomeForm, setNomeForm] = useState();
    const [menu, setMenu] = useState();
    const [descricao, setDescricao] = useState();
    
    //atributos para consultas
    const [pesquisa, setPesquisa] = useState();
    
    //api da url do sistema cardapio
    const [pagina,setPagina] = useState(2);
    const [dados,setDados] = useState([]);
    const registro = 5;
    const url = `http://localhost:8080/cardapio?pagina=${pagina}&registros=${registro}`;
    
    useEffect(()=>{
        axios.get(url).then((response)=>{
          setDados(response.data);
        })
    },[]);

 

    function cadastrarCardapio(){
        const cardapio = {
            nome:nomeForm,
            menu:menu,
            descricao:descricao,
            imagem:linkImagem,
            preco:25
        }
        
        axios.post("http://localhost:8080/cardapio", cardapio)
        .then((response)=>{
            console.log(response.data)
        }).catch((erro)=>{
            console.log(erro);
        })

    }
    


    return(
        <>
           {/*formulário cadastro*/}
           <div className="container">
                <div>
                    <h1 className='centralizado mt-2'>Cadastro do Cardápio</h1>
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
                            Salvar
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
                                <option value="ALMOCO">Almoço</option>
                                <option value="SOBREMESA">Sobremesa</option>
                                <option value="LANCHE">Lanche</option>
                            </select>
                        </div>

                        <div className='col-3 mt-4'>
                            <button type="submit" className="btn btn-primary w-100">
                                Buscar
                            </button>
                        </div>
                    </div>            
                </form>
           </div>
          {/*tabela de exibição dos dados*/}
           <div className='container mt-2'>
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
                        <td>{item.nome}</td>
                        <td>{item.menu}</td>
                        </tr>

                      ))}
                       
                    </tbody>
                </table>
           </div>

        </>
    ); 
}
export default Form_cardapio;

