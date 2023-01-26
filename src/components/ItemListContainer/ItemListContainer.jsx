import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMangaByCategory, getProducts } from "../../services/firebase";
import Carousel from "../carousel/Carousel"
import Loader from "../Loader/Loader";
import ItemList from "./ItemList"
import "../../css/Main.css"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]),
  [loader, setLoader] = useState(),
  {categoryid} = useParams();

    useEffect(() => {
        if (!categoryid){
        getProducts().then((resolve) => {
            setProductos(resolve);
            setLoader(true);
        })}
        else{
            getMangaByCategory(categoryid).then((resolve) => {
                setProductos(resolve);
                setLoader(true);
            })
            .catch((error) => {
              alert(error)
              setLoader(true)});
        }
    }, [categoryid]);

    if (loader === undefined){
      return <Loader/>
    } else{
      return (
        <><div className='main'>
        <Carousel/>
        <div className="cont-h1-cat">
        <h1 className="h1-cat">Catálogo</h1>
        </div>
        <ItemList productos={productos}/>
      </div></>
      )
    }
}
export default ItemListContainer