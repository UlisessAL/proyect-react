import { Link } from "react-router-dom";
import "../../css/Itemcss.css"

const Item = (props) => {

    const {title, category, stock, img, price, id} = props.mangas;

  return (
    
    <>
        
            <div className="carta">
                <div className="agrandar-carta">
                <img className = "img-carta" src = {img} alt={title}/>
                <span className="categoria-carta">{category}</span>
                <h2 className="title-carta">{title}</h2>

                  <div className="precio-y-stock">
                <strong className="stock-carta">Stock: {stock}  |</strong>
                <strong className="precio-carta"> |  ${price}</strong>
                  </div>

                <Link to={`/item/${id}`}>
                  <button className="boton-carta">Ver más</button>
                </Link>  
                </div>
            </div>
    
    </>
  )
}
export default Item