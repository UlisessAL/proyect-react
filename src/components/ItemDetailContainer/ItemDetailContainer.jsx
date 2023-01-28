import { useContext, useEffect, useState } from "react"
import "../../css/ItemDetail.css"
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail/ItemDetail";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loader";
import { getManga } from "../../services/firebase";
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {

    const [manga, setManga] = useState([]),
    [loader, setLoader] = useState(),
    redirection = useNavigate();
    let params = useParams();

    useEffect(() => {
        getManga(params.id)
        .then((res) => {
            if (res.title !== undefined) {
                setManga(res);
                setLoader(true)
            } else {
                return (
                    Swal.fire({
                        icon: 'error',
                        title: 'Hubo un problema al cargar la página',
                        text: "Está siendo redirigido",
                }, 
                    setTimeout(() => {
                        redirection("/")
                    }, 2000)
                ));
            }
        })
    }, []);

    const {checkStock, addToCart} = useContext(cartContext);
    const [cant, setCant] = useState(0);
    const handleAddToCart = (quantity) => {
        const mangaAndCount = {...manga, quantity:quantity}
        addToCart(mangaAndCount, quantity);
        setCant(quantity);
    };


    if (loader === undefined){
        return <Loader/>
    } else{
        return (
            <>
                <div className="container-manga">
                    <ItemDetail
                    manga={manga} 
                    updatedStock={checkStock(manga)} 
                    onAddToCart={handleAddToCart} 
                    quantityProduct={cant} 
                    />
                </div>  
            </>
        )
    }
}
export default ItemDetailContainer