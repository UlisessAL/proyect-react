import { useEffect, useState } from "react"
import { getManga } from "../services/mockServices";
import ItemDetail from "./ItemDetail/ItemDetail"
import "../css/ItemDetail.css"
import { useNavigate, useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [manga, setManga] = useState([]),
    redirection = useNavigate();

    let params = useParams();

    useEffect(() => {
        getManga(params.id)
        .then((res) => {
            setManga(res)
        })
        .catch((error) => {
            alert(error)
            setTimeout(() => {
                redirection("/")
            }, 2000);
        })
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