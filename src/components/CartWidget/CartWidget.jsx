import { Link } from "react-router-dom"

const CartWidget = () => {
const estiloCarrito = {
    fontSize: "20px"
}

return (
    <>
        <Link style={estiloCarrito} to="/cart">
            🛒
        </Link>
    </>
)
}
export default CartWidget