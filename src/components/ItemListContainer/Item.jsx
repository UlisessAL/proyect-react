import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/Itemcss.css"
import { cartContext } from "../../storage/cartContext";

const Item = (props) => {

    const {checkStock} = useContext(cartContext);
    const {title, category, stock, img, price, id} = props.mangas;

  return (
    
    <>
        
            <div className="carta">
                <div className="agrandar-carta">
                <img className = "img-carta" src = {img} alt={title}/>
                <span className="categoria-carta">{category}</span>
                <h2 className="title-carta">{title}</h2>

                  {checkStock(props.mangas) !== 0 && stock !== 0 ? 
                  <>
                  <div className="precio-y-stock">    
                    <strong className="stock-carta">Stock: {checkStock(props.mangas)}  |</strong>
                    <strong className="precio-carta"> |  ${price}</strong>
                  </div>
                  <Link to={`/item/${id}`}>
                  <button className="boton-carta">Ver más</button>
                </Link> 
                  </> : 
                  <div className="no-stock">
                    <h2 className="h2-no-stock">No hay stock</h2>  
                  </div>} 
                </div>
            </div>
    
    </>
  )
}
export default Item