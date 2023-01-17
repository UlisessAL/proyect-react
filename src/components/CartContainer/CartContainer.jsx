import "../../css/CartContainer.css"
import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../storage/cartContext"
import { NoProductsAlert } from "../CartWidget/NoProducts/NoProductsAlert";

const CartContainer = () => {
    const [newCart, setNewCart] = useState([]);
    const [loader, setLoader] = useState()
    const {cart, removeItem, clearCart, totalPrice} = useContext(cartContext);

    useEffect(() => {
        setNewCart(cart)
        setLoader(...cart)
    }, [cart])
    
    if (loader === undefined){
        return <NoProductsAlert/>
    } else{
        return ( 
        <>
            <div className="table-cart">
                <div className="table-cart-inf">
                    <div className="overflow-x-auto">
                        <table className="table w-full" id=" table-color">
                            <thead>
                                <tr className="table-color">
                                    <th></th>
                                    <th> Nombre</th>
                                    <th>Cantidad</th>
                                    <th></th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newCart.map((c) => {
                                    return(
                                        <tr className="hover table-color" key={c.id}>
                                            <td ><img src={c.img} alt={c.img} className="img-cart" /></td>
                                            <td >{c.title}</td>
                                            <td >{c.quantity}</td>
                                            <td >
                                                <button onClick={() => removeItem(c)} className="btn  bg-orange-600 button-table"> Eliminar</button>
                                            </td>
                                            <td >${c.quantity * c.price}</td>
                                        </tr>
                )})}
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="total-price">Precio total: ${totalPrice()}  </td>
                                            
                                        </tr>
                            </tbody>
                        </table>

                        <div className="buttons-cart">
                            <button className="btn bg-orange-600 button-table" onClick={() => clearCart()}>borrar carrito</button>
                            <button className="btn bg-orange-600 button-table end-purchase">Finalizar Compra</button>
                        </div>
        
                        
                    </div>
                </div>
            </div>
        </>)
    }

}
export default CartContainer