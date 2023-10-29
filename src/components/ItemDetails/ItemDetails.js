import {  useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
// import {  useNavigate } from "react-router-dom"; 
import { CartContext } from "../../context/CartContext";
import {  Card } from "react-bulma-components"; 
import Swal from "sweetalert2";  
import { Link } from "react-router-dom";
    
export const ItemDetails = ({ item }) => {   
 
const [ isCant, setIsCant ] = useState(false); 
const { addItem } = useContext(CartContext);    


const onAdd = (quantity) => {  
  addItem( {...item, quantity} ); 
  setIsCant(true);  
  showMessage(quantity);        
}    

// const navigate = useNavigate(); 
// const handleBackToHome = navigate("/") 

const showMessage = (quantity) =>  {
  Swal.fire({  
    position: 'botton-end',   
    icon: 'success',
    title: `Agregaste ${quantity} producto al carrito`,
    showConfirmButton: false, 
    timer: 1500     
  })  
}

 
  return (    
    <Card>  
         <img   
         className="image is-2by1"  
         src={ item.imgUrl } alt={ item.name } >      
         </img>                  
        <Card.Content  className="card-content"> 
          <div className="media-content">  
            <h6 className="title is-5 mb-4">{ item.descrip }</h6>  
            <p className="subtitle is-6 mb-4"> 
            Precio: $<strong
            className="size-3"   
            >{ item.price }</strong></p>    
            <p className="subtitle is-6 mb-4">Stock: { item.stock }</p>     
          </div>        
         <Card.Footer> 
         {
          isCant ? (  
            <>
            <Link to="/cart"
          className="button is-info m-4"
          >Ver carrito</Link>    
           <Link to="/" 
            className="button is-info is-light m-4"
            >Seguir comprando</Link>   
            </> 
          ) : ( 
            <ItemCount  
              stock={ item.stock }     
              initial={1}   
              onAdd={onAdd} />       
          )  
         }     
         </Card.Footer>   
       </Card.Content>       
     </Card> 
  )
}
