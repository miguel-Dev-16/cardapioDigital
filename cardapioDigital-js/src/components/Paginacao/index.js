import { useState } from "react";

function Paginacao({registro,numerRegistro,pagina,setPagina}){
    const itensPorPagina = registro;
    const totalItens = numerRegistro;
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    
    const proximo = ()=>{
        if(pagina < totalPaginas){
            setPagina(pagina +1);
        }
    };

    const anterior = ()=>{
        if(pagina > 1){
            setPagina(pagina - 1);
        }
    };


return(
<>
<nav aria-label="Page navigation example" className='container w-25'>
    <ul className="pagination gap-3">
        <li className="page-item">
        <button className="btn btn-primary" onClick={anterior}
        disabled={pagina === 1}>anterior</button>
        </li>
        <li className="page-item"><a className="page-link">{pagina}</a></li>
        
        <li className="page-item">
            <button className="btn btn-primary" onClick={proximo}
            disabled={pagina === totalPaginas}>próximo</button>
        </li>
    </ul>
</nav>
</>
 );
}
export default Paginacao;