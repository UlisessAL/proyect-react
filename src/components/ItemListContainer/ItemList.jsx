import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import getProducts, { getMangaByCategory } from "../../services/mockServices"
import Item from "./Item"

const ItemList = () => {

    const [productos, setProductos] = useState([]),
    {categoryid} = useParams();

    useEffect(() => {
        if (!categoryid){
        getProducts().then((resolve) => {
            setProductos(resolve);
        })}
        else{
            getMangaByCategory(categoryid).then((resolve) => {
                setProductos(resolve)
            })
            .catch((error) => alert(error));
        }
    }, [categoryid])
    
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