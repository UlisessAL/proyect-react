import "../../css/CartContainer.css"
import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../storage/cartContext"
import { NoProductsAlert } from "../CartWidget/NoProducts/NoProductsAlert";
import { createOrder } from "../../services/firebase";
import Swal from 'sweetalert2';

const CartContainer = () => {
    const [newCart, setNewCart] = useState([]);
    const [loader, setLoader] = useState()
    const {cart, removeItem, clearCart, totalPrice} = useContext(cartContext);

    useEffect(() => {
        setNewCart(cart)
        setLoader(...cart)
    }, [cart]);

    const handleCheckout = () => {
        const items = cart.map (({id, price, title, quantity}) => ({id, price, title, quantity}));

        const order = {
            buyer:{
                name:"Ulises",
                email:"ejemplomail@gmail.com",
                phone: 1265327653,
            },
            items: items,
            total: totalPrice(),
            date: new Date(),
        }

        setTimeout(() => {
            clearCart()
        }, 2000);

        createOrder(order).then((id) => Swal.fire({
            icon: 'success',
            title: 'Su compra ha sido realizada',
            text: `Su id de compra es: ${id}`,
        }));
    }

    
    if (loader === undefined){
        return <NoProductsAlert/>
    } else{
        return ( 
        <>

<div className="table-cart">
                <div className="table-cart-inf">
                    <div className="overflow-x-auto">
                        <table className="table-orig">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th> Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {newCart.map((c) => {
                                    return(
                                        <tr key={c.id}>
                                            <td><img src={c.img} alt={c.img} className="img-cart" /></td>
                                            <td> <strong>{c.title}</strong></td>
                                            <td> <strong>${c.price}</strong></td>
                                            <td> <strong>{c.quantity}</strong></td>
                                            <td> <strong>${c.quantity * c.price}</strong></td>
                                            <td>
                                                <button onClick={() => removeItem(c)} className="btn button-table"> X </button>
                                            </td>
                                        </tr>
                                    )})}
                            </tbody>
                        </table>

                        <div className="total-purchase">
                            <p>El total de tu compra es de <strong>${totalPrice()}</strong></p> 
                        </div>

                        <div className="buttons-cart">
                            <button className="btn button-table clear-cart" onClick={() => clearCart()}>borrar carrito</button>
                            <button className="btn button-table end-purchase" onClick={handleCheckout} >Finalizar Compra</button>
                        </div>
        
                        
                    </div>
                </div>
            </div>
        </>)
    }

}
export default CartContainer