import { useEffect, useState} from 'react';
import axios from 'axios';

function Tabela(
    {pagina,dados,deletar}){


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
                        <td>{item.nome}</td>
                        <td>{item.menu}</td>
                        <td>
                            <a href='' onClick={()=>deletar(item.codigo)} className='p-2'>
                                <i className="bi bi-trash3-fill"></i>
                            </a>
                            <a href=''>
                                <i className="bi bi-pencil-fill"></i>
                            </a>
                        </td>
                        </tr>

                      ))}
                    </tbody>
                </table>
      </>
   );
}
export default Tabela;