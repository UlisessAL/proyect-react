import { createContext, useState } from "react";


export const cartContext = createContext();


function CartProvider(props){
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        

        let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
        let newCart = [...cart]

        if (isInCart !== -1) {
            newCart[isInCart].quantity += cantidad;
            setCart(newCart);
        } else {
            newCart.push(item)
            setCart(newCart)
        }
    };

    const removeItem = (product) => {

        const newCart = [...cart]
        const deleteProduct = newCart.filter((prod) => prod.id !== product.id);
        setCart(deleteProduct)
    
    };

    const clearCart = () => {
        setCart([])
    };

    const totalItemsInCart = () => {
        let total = 0;
        let product;

        for (product of cart){
            total ++
        }
        return total;
    }

    const totalPrice = () => {
        let total = 0;
        let product;
        for (product of cart){
            const {price, quantity} = product;
            total += price * quantity
        }
        return total
    }

    return(
        <cartContext.Provider value={{cart,addToCart, removeItem, clearCart, totalItemsInCart,totalPrice}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider};