import { useEffect, useState } from "react";
import { products } from "../../asynProducts";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import BeatLoader from "react-spinners/BeatLoader";
import { useParams } from "react-router-dom"; 
import './ItemDetailsContainer.css';
 
export const ItemDetailsContainer = () => {

  const [item, setItem ] = useState([]);  
  const [loading, setLoading] = useState(true)  

  const { itemId } = useParams() 
 
  const getItemById = () => {
    return new Promise((resolve) => {
       setTimeout( () => {
           resolve(products);      
       }, 2000)      
   
    })    
   }

  useEffect(() => {  
    setLoading(true)

    getItemById(itemId)  
    .then((resp) => { 
      setItem(resp.find(item => item.id === itemId))     
    }) 
    .catch((err) => {
      console.error(err);   
    }) 

    setLoading(false);

  
  }, [itemId])     
  
    return (  
   <div className="ItemDetailsContainer">    
        { loading ? (
        <BeatLoader color="#008040" />
      ) : <ItemDetails  item={item} />    
       }  
                
    </div> 
  )
}
