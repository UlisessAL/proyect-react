import akaza from "./akaza.webp"
import "../../../css/NoProducts.css"
import { Link } from "react-router-dom"

export const NoProductsAlert = () => {
    return (
            <>
                <div className="products-alert">
                    <img src={akaza} alt={akaza} className="img-alert"/>
                    <h2 className="h2-alert">Alto ahí!!</h2>
                    <p className="p-alert">No tienes ningun producto en tu carrito, <br /> asi que te sugerimos volver al catálogo.</p>
                    <Link className="btn" to="/">Volver al Catálogo</Link>
                </div>
            </>
    )
}