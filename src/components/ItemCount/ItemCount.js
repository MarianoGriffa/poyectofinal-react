 import {  useState } from 'react';
import { Button } from 'react-bulma-components';
 import './ItemCount.css';
 
 export const ItemCount = ({ initial, stock, onAdd }) => { 

   const [ count, setCount ] = useState(initial);     
   
   const addition = () => count < stock && setCount(count + 1)
   const subtraction = () => count > initial && setCount(count - 1)
   const handleAdd = () => stock && (onAdd(count), setCount(initial))
            
  return (   
    <div className="d-flex flex-column">
    {stock === 0 && <h4 className="no-stock-count"> 
    No disponible actualmente :( 
    </h4>}  
    <div className="d-flex flex-row">
      <div className="count-container">
        <Button className="btn-count"  
          color="info" 
         onClick={subtraction}  
         disabled={stock === 0}>   
         -  
         </Button>
        <span className="count">{ count }</span>
        <Button 
        color="info" 
        onClick={addition} 
        disabled={stock === 0}> 
         +
        </Button>
      </div>
      <Button className="add-btn-count"
       color="info" 
       onClick={ handleAdd }
       disabled={stock === 0}>
       Agregar al carrito 
       </Button>  
    </div> 
  </div>
      
  )
 
 } 