import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMangaByCategory, getProducts } from "../../services/firebase";
import Carousel from "../carousel/Carousel"
import Loader from "../Loader/Loader";
import ItemList from "./ItemList"
import "../../css/Main.css"
import Swal from 'sweetalert2';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]),
  [loader, setLoader] = useState(),
  redirection = useNavigate(),
  {categoryid} = useParams();

    useEffect(() => {
        if (!categoryid){
        getProducts().then((resolve) => {
          setProductos(resolve);
          setLoader(true);
        })}
        else{
            getMangaByCategory(categoryid).then((resolve) => {
              if (resolve.length !== 0) {
                setProductos(resolve);
                setLoader(true);
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
        }
    }, [categoryid]);

    if (loader === undefined){
      return <Loader/>
    } else{
      return (
          <>
            <div className='main'>
              <Carousel/>
              <div className="cont-h1-cat">
                <h1 className="h1-cat">Catálogo</h1>
              </div>
              <ItemList productos={productos}/>
            </div>
        </>
      )
    }
}
export default ItemListContainer