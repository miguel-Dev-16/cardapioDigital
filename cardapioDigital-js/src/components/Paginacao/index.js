import { useState } from "react";

function Paginacao({registro}){
    const [paginaAtual,setPaginaAtual] = useState(1);
    const itensPorPagina = 5;
    const totalItens = registro;
    const totalPaginas = Math.ceil(totalItens / itensPorPagina);
    
    const proximo = ()=>{
        if(paginaAtual < totalPaginas){
            setPaginaAtual(paginaAtual +1);
        }
    };

    const anterior = ()=>{
        if(paginaAtual > 1){
            setPaginaAtual(paginaAtual - 1);
        }
    };


return(
<>
<nav aria-label="Page navigation example">
    <ul className="pagination gap-3">
        <li className="page-item">
        <button className="btn btn-primary" onClick={anterior}
        disabled={paginaAtual === 1}>anterior</button>
        </li>
        <li className="page-item"><a className="page-link" href="#">{paginaAtual}</a></li>
        

        <li className="page-item">
            <button className="btn btn-primary" onClick={proximo}
            disabled={paginaAtual === totalPaginas}>próximo</button>
        </li>
    </ul>
</nav>
</>
    );
}
export default Paginacao;