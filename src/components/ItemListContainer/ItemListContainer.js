import { useEffect, useState } from "react";
import { products } from "../../asynProducts"; 
import { ItemList } from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader";
import { useParams } from "react-router-dom"; 
  
const ItemListContainer = () => {    
 
const [ items, setItems ] = useState([]);  
const [loading, setLoading] = useState(true)   
// const [error, setError] = useState(false)  
const { categoryId } = useParams();     

const title = categoryId === "jeans" ? "Jeans" :
categoryId === "camisetas" ? "Camisetas" :  
categoryId === "buzos" ? "Buzos" :    
categoryId === "camperas" ? "Camperas" : "Todos los productos"; 

const getProductsByCategory = () => {
  return new Promise((resolve) => {   
     setTimeout( () => { 
         resolve(products);       
     }, 1000)             
 
  })      
 } 

useEffect(() => {   
  setLoading(true)   
  
   getProductsByCategory()      
  .then( resp => { 
    if(categoryId) {  
      setItems(resp.filter(item => item.category === categoryId));
     } else { 
      setItems(products);  
    }
  })    
  .catch((err) => { 
    console.error(err);  
  })   
   
  setLoading(false)   
 
},[categoryId])         
  
 return (    
   <div className="container">    
     <h3 className="title is-3 is-spaced">{ title }</h3>     
     <div>   
    {
      loading ? (
          <BeatLoader color="#008040" />
        ) :  <ItemList items={ items } />  
        }     
    </div>         
   </div>      
 
   ) 
 
   } 
   export default ItemListContainer;