import { useEffect, useState } from "react";

const ItemCount = (props) => {

    const [count, setCount] = useState(1),
    [newStock, setNewStock] = useState(1);

    useEffect(() => {
        setNewStock(props.stock - 1)
    }, [props.stock])
    
    const addCount = () => {
        
        if (count !== props.stock) {
            setCount(count + 1);
            setNewStock(newStock - 1);
        }else{
            setNewStock(0);
        }
    },
    restCount = () => {
        if (count !== 1) {
            setCount(count - 1);
            setNewStock(newStock + 1);
        }else{
            setNewStock(props.stock - 1)
        }
    };

    return (
        <>
            <div className="stock-and-count">
                <p className="stock-manga">Stock: {newStock}</p>
                <div className="btn-count">
                    <button className="btn" id="btn-manga" disabled={newStock === props.stock -1} onClick={restCount}>-</button>
                        <p className="count">Cantidad: {count}</p>
                    <button className="btn" id="btn-manga" disabled={newStock <= 0}onClick={addCount}>+</button>
                </div>
            </div>
            <div className="cont-btn-manga">
                <button className="btn" id="manga-btn" disabled={newStock < 0} onClick={() => props.onAddToCart(count)}>Añadir al carrito</button>
            </div>
        </>
    )
}
export default ItemCount