import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore"; 
// import { products } from "../../asynProducts"; 
import { ItemDetails } from "../ItemDetails/ItemDetails";
import BeatLoader from "react-spinners/BeatLoader";
import { useParams } from "react-router-dom";  
import './ItemDetailsContainer.css';  
  
export const ItemDetailsContainer = () => {

  const [item, setItem ] = useState([]);  
  const [loading, setLoading] = useState(true)  

  const { itemId } = useParams() 
 
  useEffect(()=>{
    const db = getFirestore() 
    const queryDoc = doc(db, 'productos', itemId)
    getDoc(queryDoc) 
    .then(results => setItem({id: results.id, ...results.data()}))
    .catch(err => console.error(err))
    .finally(()=> setLoading(false))     

}, [])    
       
    return (  
   <div className="ItemDetailsContainer">     
        {
           loading ? (
        <BeatLoader className="has-text-centered" color="#008040" />
      ) : <ItemDetails  item={item} />     
       }   
                
    </div> 
  )
}
