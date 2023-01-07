import "../../css/ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {

    const {title, category, stock, img, price, about} = props.manga;

    return (
    <>
        <div className="container-one-manga">
                <img className="img-one-manga" alt={title} src={img}/>
                <div className="cont-info">
                    <h1 className="title-one-manga">{title}</h1>
                    <strong className="price-manga">${price}</strong>
                    <p className="about-manga"> Sinopsis: {about}</p>
                    <p>Categoría: {category}</p>
                    <ItemCount stock={stock} />
                </div>
        </div>
    
    </>
)
}
export default ItemDetail