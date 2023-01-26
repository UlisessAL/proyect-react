import "../../css/CartContainer.css"
import { useContext, useEffect, useState } from "react"
import { cartContext } from "../../storage/cartContext"
import { NoProductsAlert } from "../CartWidget/NoProducts/NoProductsAlert";
import { createOrder } from "../../services/firebase";
import Swal from 'sweetalert2';
import CartDetail from "./CartDetail/CartDetail";
import FormCheckout from "./FormCheckout/FormCheckout";

const CartContainer = () => {
    const [newCart, setNewCart] = useState([]);
    const [loader, setLoader] = useState()
    const {cart, removeItem, clearCart, totalPrice} = useContext(cartContext);

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
            <><CartDetail
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