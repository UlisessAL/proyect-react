import "../css/Itemcss.css"

const Item = (props) => {

    const {title, category, stock, img, price} = props.mangas;

  return (
    
    <>
        
            <div className="carta">
                <div className="agrandar-carta">
                <img className = "img-carta" src = {img} alt={title}/>
                <h2 className="title-carta">{title}</h2>
                <div className="precio-y-stock">
                <strong className="stock-carta">Stock: {stock}  |</strong>
                <strong className="precio-carta"> |  ${price}</strong>
                </div>
                <button className="boton-carta">Ver más</button>
                <div className="categoria">
                <span className="categoria-carta">Categoría: <br/>   {category}</span>
                </div>
                </div>
            </div>
    
    </>
  )
}
export default Item