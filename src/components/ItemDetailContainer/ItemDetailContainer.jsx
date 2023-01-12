import { useEffect, useState } from "react"
import "../../css/ItemDetail.css"
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { getManga } from "../../services/mockServices";

const ItemDetailContainer = () => {

    const [quantCart, setQuantCart] = useState(0),
    handleAddToCart = (quantity) => {
        setQuantCart(quantity);
        console.log(quantity);
    };

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
                <ItemDetail manga={manga} onAddToCart={handleAddToCart} quantityProduct={quantCart}/>
            </div>  
        </>
    )
}
export default ItemDetailContainer