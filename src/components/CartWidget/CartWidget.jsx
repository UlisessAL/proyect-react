import { useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../storage/cartContext"

const CartWidget = () => {

    const context = useContext(cartContext)

const estiloCarrito = {
    fontSize: "20px"
}

const estiloCant = {
    color:"white"
}

return (
    <>
    {
        context.totalItemsInCart() === 0 ? 
        <Link style={estiloCarrito} to="/cart">
            <span style={estiloCant}>🛒</span> 
        </Link>
        :   <Link style={estiloCarrito} to="/cart">
                <span style={estiloCant}>🛒{context.totalItemsInCart()}</span>
            </Link>
    }
        
    </>
)
}
export default CartWidget