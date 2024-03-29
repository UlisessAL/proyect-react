import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartProvider(props){
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartStorage")) || [];
    const [cart, setCart] = useState(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("cartStorage", JSON.stringify(cart))
    }, [cart])

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
            total += product.quantity
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

    const checkStock = (manga) => {
        let productInCart = cart.find((item) => item.id === manga.id);
        let updatedStock = manga.stock;

        if(productInCart){
            updatedStock = manga.stock - productInCart.quantity;
        };

        return updatedStock;
    }

    return(
        <cartContext.Provider 
            value={{
                cart,
                addToCart, 
                removeItem, 
                clearCart, 
                totalItemsInCart,
                totalPrice, 
                checkStock}}
        >
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider};