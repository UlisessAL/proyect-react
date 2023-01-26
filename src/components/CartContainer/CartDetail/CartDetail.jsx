const CartDetail = (props) => {
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
                                {props.newCart.map((c) => {
                                    return(
                                        <tr key={c.id}>
                                            <td><img src={c.img} alt={c.img} className="img-cart" /></td>
                                            <td> <strong>{c.title}</strong></td>
                                            <td> <strong>${c.price}</strong></td>
                                            <td> <strong>{c.quantity}</strong></td>
                                            <td> <strong>${c.quantity * c.price}</strong></td>
                                            <td>
                                                <button onClick={() => props.removeItem(c)} className="btn button-table"> X </button>
                                            </td>
                                        </tr>
                                    )})}
                            </tbody>
                        </table>

                        <div className="total-purchase">
                            <p>El total de tu compra es de <strong>${props.totalPrice()}</strong></p> 
                        </div>

                        <div className="buttons-cart">
                            <button className="btn button-table clear-cart" onClick={props.clearCart}>borrar carrito</button>
                        </div>
        
                        
                    </div>
                </div>
            </div>
        </>
  )
}
export default CartDetail