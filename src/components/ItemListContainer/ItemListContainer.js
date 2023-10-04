import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asynProducts";
import { ItemList } from "../ItemList/ItemList";

import { useParams } from "react-router-dom"; 

 const ItemListContainer = ({ greeting }) => { 
 
const [ products, setProducts ] = useState([]);
 
const { categoryId } = useParams();

useEffect(() => {
  const asynFun = categoryId ? getProductsByCategory : getProducts;
 
  asynFun(categoryId)  
  .then((resp) => { 
    setProducts(resp);   
  }) 
  .catch((err) => {
    console.error(err);
  }) 

}, [categoryId]) 

    return (   
   <div>  
     <h3 className="title is-3 is-spaced">{greeting}</h3> 
     <ItemList  products={ products } />         
   
   </div>          

    ) 
} 

export default ItemListContainer;  
  
 