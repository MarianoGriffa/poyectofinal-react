import { useEffect, useState } from "react";
import { collection, getFirestore,  getDocs, query, where } from 'firebase/firestore';
// import { products } from "../../asynProducts";  
import { ItemList } from "../ItemList/ItemList";
import BeatLoader from "react-spinners/BeatLoader"; 
import { useParams } from "react-router-dom";   
  
const ItemListContainer = () => {    
 
const [ items, setItems ] = useState([]);  
const [loading, setLoading] = useState(true)   
// const [error, setError] = useState(false)  
const { categoryId } = useParams();     
 
useEffect(() => {
  const db = getFirestore()
  const queryCollection = collection(db, 'productos')
  const queryCollectionFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection
  getDocs(queryCollectionFilter) 
  .then(respuestaPromesa => {       
    setItems(respuestaPromesa.docs.map(prod => ({id: prod.id, ...prod.data()})))
      })         
  .catch(err => console.log(err))  
  .finally(()=> setLoading(false))   

},[categoryId]) 


  
 return (     
   <div className="container">       
    {
      loading ? ( 
          <BeatLoader className="has-text-centered" color="#008040" />
        ) :  <ItemList items={ items } />    
        }      
        
   </div>      
 
   ) 
 
   } 
   export default ItemListContainer;