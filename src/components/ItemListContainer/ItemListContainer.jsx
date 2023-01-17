import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts, { getMangaByCategory } from "../../services/mockServices";
import Carousel from "../carousel/Carousel"
import Loader from "../Loader/Loader";
import ItemList from "./ItemList"

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
        <ItemList productos={productos}/>
      </div></>
      )
    }
}
export default ItemListContainer