import { useEffect, useState } from "react";
import "../../css/ItemDetail.css"

const ItemDetail = (props) => {

    const {title, category, stock, img, price, about} = props.manga;

    const [count, setCount] = useState(1);

    const [newStock, setNewStock] = useState(1);

    useEffect(() => {
        setNewStock(stock - 1)
    }, [stock])
    

    const addCount = () => {
        
        if (count !== stock) {
            setCount(count + 1);
            setNewStock(newStock - 1);
            console.log(newStock);
        }else{
            setNewStock(0);
        }
    }

    const restCount = () => {
        if (count !== 1) {
            setCount(count - 1);
            setNewStock(newStock + 1);
            console.log(newStock);
    }else{
        setNewStock(stock - 1)
    }
}

    return (
    <>
        <div className="container-one-manga">
                <img className="img-one-manga" alt={title} src={img}/>
                <div className="cont-info">
                    <h1 className="title-one-manga">{title}</h1>
                    <strong className="price-manga">${price}</strong>
                    <p className="about-manga"> Sinopsis: {about}</p>
                    <p>Categoría: {category}</p>
                    <div className="stock-and-count">
                        <p className="stock-manga">Disponible: {newStock}</p>
                        <div className="btn-count">
                                <button className="btn" id="btn-manga" disabled={newStock === stock -1} onClick={restCount}>-</button>
                                <p className="count">{count}</p>
                                <button className="btn" id="btn-manga" disabled={newStock === 0}onClick={addCount}>+</button>
                        </div>
                    </div>
                    <div className="cont-btn-manga">
                        <button className="btn" id="manga-btn" >Añadir al carrito</button>
                    </div>
                    
                </div>
        </div>
    
    </>
  )
}
export default ItemDetail