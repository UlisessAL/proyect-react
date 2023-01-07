import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts, { getMangaByCategory } from "../../services/mockServices";
import Carousel from "../carousel/Carousel"
import ItemList from "./ItemList"

const ItemListContainer = () => {

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
    }, [categoryid]);

  return (
    <div className='main'>
      <Carousel/>
      <ItemList productos={productos}/>
    </div>
  )
}
export default ItemListContainer