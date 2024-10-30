import { useState } from 'react';
import './form_cardapio.css';


function Form_cardapio(){
    const [linkImagem, setLinkImagem] = useState();
    const [opcaoMenuForm, setOpcaoMenuForm] = useState("Menu");
    
    function exibir(e){
       e.preventDefault();
       alert("a seleção é: " + opcaoMenuForm);
    }

    return(
        <>
           {/*formulário cadastro*/}
           <div className="container">
                <div>
                    <h1 className='centralizado mt-2'>Cadastro do Cardápio</h1>
                </div>
                <form className=''>
                    <div className="mb-3 col-6 centralizado mt-3">
                            <label htmlFor="nome" className="nome">Nome:</label>
                            <input type="text" className="form-control" id="nome" />
                    </div>

                    <div className="col-6 centralizado">
                            <select className="form-select form-select-sm mb-3 " aria-label="menu">
                                    <option value="Menu">Menu</option>
                                    <option value="Almoço">Almoço</option>
                                    <option value="Sobremesa">Sobremesa</option>
                                    <option value="Lanche">Lanche</option>
                            </select>
                    </div>
                    
                    <div className="form-floating mb-3 col-6 centralizado">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Descrição:</label>
                    </div> {/* */}
                     
                    <div className="">
                        <div className="mb-3 col-6 centralizado">
                                <label htmlFor="nome" className="nome">Link da imagem:</label>
                                <input type="text" className="form-control" id="nome"
                                onChange={(e)=> setLinkImagem(e.target.value)} />
                        </div>
                        <div className="col-6 centralizado">
                            <div className='foto'>
                                  <img src={linkImagem} alt='foto' className='foto-dimensao'/>
                            </div>
                        </div>  
                    </div>
                    <div className='col-6 centralizado'>
                         <button type="button" className="btn btn-success mt-3 mb-2 w-100">
                            Salvar
                         </button>
                    </div>
                </form>
           </div>

            {/*formulário pesquisa*/}
           <div className='container'>
                <form className='row card p-2' onSubmit={exibir}>
                    <div className='d-flex gap-2 justify-content-center'>

                        <div className="col-2">
                            <label htmlFor="codigo" className="">Código:</label>
                            <input type="text" className="form-control" id="codigo" />
                        </div>

                        <div className='col-5 mt-4'>
                            <select className="form-select" 
                            aria-label="menu" 
                            name='menu' 
                            value={opcaoMenuForm}
                            onChange={(texto) => setOpcaoMenuForm(texto.target.value)} >
                                <option value="Menu">Selecione</option>
                                <option value="Almoço">Almoço</option>
                                <option value="Sobremesa">Sobremesa</option>
                                <option value="Lanche">Lanche</option>
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
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
           </div>

        </>
    ); 
}
export default Form_cardapio;

