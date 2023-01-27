import { memo } from "react"
import Item from "./Item"

const ItemList = (props) => {
    
    return (
        <>
            <div className="flexbox">
                <div className="grid-cartas">
                    {props.productos.map((manga) => <Item key={manga.id} mangas={manga} />)}
                </div>
            </div>
        </>
    )
}
export default memo(ItemList)