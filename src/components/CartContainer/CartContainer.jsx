import "../../css/CartContainer.css"
import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../storage/cartContext"
import { NoProductsAlert } from "../CartWidget/NoProducts/NoProductsAlert";
import { orderWithControlStock } from "../../services/firebase";
import Swal from 'sweetalert2';
import CartDetail from "./CartDetail/CartDetail";
import FormCheckout from "./FormCheckout/FormCheckout";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
    const [newCart, setNewCart] = useState([]);
    const [loader, setLoader] = useState()
    const {cart, removeItem, clearCart, totalPrice} = useContext(cartContext);
    const redirection = useNavigate();


    useEffect(() => {
        setNewCart(cart)
        setLoader(...cart)
    }, [cart]);

    const handleCheckout = (evt, userData) => {
        evt.preventDefault();
        const items = cart.map (({id, price, title, quantity}) => ({id, price, title, quantity}));

        const order = {
            buyer: userData,
            items: items,
            total: totalPrice(),
            date: new Date(),
        }

        orderWithControlStock(order).then((id) => 
            {Swal.fire({
                icon: 'success',
                title: 'Su compra ha sido realizada',
                text: `Su id de compra es: ${id}`,
            })
            setTimeout(() => {
                clearCart()
            }, 2000);
            setTimeout(() => {
                redirection("/")
            }, 2000);
            }
            ).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Hubo un problema al realizar su compra',
                    text: error,
                    confirmButtonText:"Regresar"
                })
            });
    }

    
    if (loader === undefined){
        return <NoProductsAlert/>
    } else{
        return ( 
            <>
                <CartDetail
                    newCart={newCart} 
                    clearCart={clearCart}  
                    removeItem={removeItem} 
                    totalPrice={totalPrice}
                />
                <FormCheckout handleCheckout={handleCheckout}/>
            </>
        )
    }

}
export default CartContainer