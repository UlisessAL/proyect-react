import { useEffect, useState } from "react"
import { getManga } from "../services/mockServices";
import ItemDetail from "./ItemDetail/ItemDetail"
import "../css/ItemDetail.css"


const ItemDetailContainer = () => {

    const [manga, setManga] = useState([]);


    useEffect(() => {
        getManga()
        .then((res) => {
            setManga(res)
        })
        .catch((error) => alert(error))
    }, [])
    

return (
    <>
        <div className="container-manga">
            <ItemDetail manga={manga}/>
        </div>  
    </>
)
}
export default ItemDetailContainer