import { Link } from "react-router-dom";
import "../../../css/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {

    const {title, category, img, price, about} = props.manga,
    quantity = props.quantityProduct;

    return (
            <>
                <div className="container-one-manga">
                        <img className="img-one-manga" alt={title} src={img}/>
                        <div className="cont-info">
                            <h1 className="title-one-manga">{title}</h1>
                            <strong className="price-manga">${price}</strong>
                            <p className="about-manga"> Sinopsis: {about}</p>
                            <p>Categoría: {category}</p>
                            {
                                quantity === 0 ? 
                                <ItemCount 
                                stock={props.updatedStock} 
                                onAddToCart={props.onAddToCart}
                                />
                                :
                                <Link className="btn btn-cart" id="manga-btn" to="/cart">Terminar mi compra</Link>
                            }
                        </div>
                </div>
            </>
    )
}
export default ItemDetail