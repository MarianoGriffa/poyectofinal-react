import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase'; 
import { ItemList } from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader"; 
import { useParams } from "react-router-dom";    
   
const ItemListContainer = () => {    
 
const [ items, setItems ] = useState([]);   
const [loading, setLoading] = useState(true)   
 
const { categoryId } = useParams();  

const title = (categoryId && categoryId.charAt(0).toUpperCase() + categoryId.slice(1)) ?? "Todos";   
        
useEffect(() => {  
  const queryCollection = collection(db, 'productos')
  const queryCollectionFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection
  getDocs(queryCollectionFilter) 
  .then(resp => {       
    setItems(resp.docs.map(prod => ({id: prod.id, ...prod.data()}
    
    )))
    .sort((a, b) => a.title.localeCompare(b.title)) 
      })           
  .catch(err => console.log(err))     
  .finally(()=> setLoading(false))   

},[categoryId])  


  
 return (     
   <div className="container"> 
     <h3 className="title is-3 is-spaced">{title}</h3>        
    {
      loading ? (  
          <BeatLoader className="mt-4 has-text-centered" color="#008040" />
        ) :  <ItemList items={ items } />     
    }       
         
   </div>      
  
   ) 
 
   } 
   export default ItemListContainer;