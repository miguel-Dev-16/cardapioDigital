import "./card.css";
function Card({
    nome,
    preco,
    descricao,
    textBotao,
    img}){
    return(
        <>
          <div className="card t-card">
              <img src={img} className="card-img-top" alt="imagem" />
                <div className="card-body">
                    <h5 className="card-title">{nome}</h5>
                    <p className="card-text">R$ {preco}</p>
                    <p className="card-text">{descricao}</p>
                    <a href="#" className="btn btn-primary">{textBotao}</a>
                </div>
          </div>
       </>
    );
}
export default Card;