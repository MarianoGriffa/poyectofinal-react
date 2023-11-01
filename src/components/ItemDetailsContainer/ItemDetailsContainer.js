import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../../config/firebase';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import BeatLoader from "react-spinners/BeatLoader"; 
import { useParams } from "react-router-dom";  
import './ItemDetailsContainer.css';   
     
export const ItemDetailsContainer = () => {

  const [item, setItem ] = useState([]);  
  const [loading, setLoading] = useState(true)  

  const { itemId } = useParams()   
 
  useEffect(()=>{
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
        <BeatLoader className="mt-4 has-text-centered" color="#008040" />
      ) : <ItemDetail  item={item} />      
       }    
                
    </div> 
  ) 
}
