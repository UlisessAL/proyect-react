import { useEffect, useState } from "react"
import getProducts from "../services/mockServices"
import Item from "./Item"

const ItemList = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts().then((resolve) => {
            setProductos(resolve)
        })
    }, [])
    

    return (
        <>
        <div className="flexbox">
            <div className="grid-cartas">
            {productos.map((manga) => <Item key={manga.id} mangas={manga} />)}
            </div>

            </div>
        </>
    )
}
export default ItemList