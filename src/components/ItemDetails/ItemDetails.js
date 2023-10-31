import {  useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
// import {  useNavigate } from "react-router-dom"; 
import { CartContext } from "../../context/CartContext";
import {  Card } from "react-bulma-components"; 
import Swal from "sweetalert2";  
import { Link } from "react-router-dom";   
import '../../index.css';  
      
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
         className="image is-2by1 image-detail"  
         src={ item.imgUrl } alt={ item.name } >      
         </img>                   
        <Card.Content  className="card-content"> 
          <div className="media-content">  
            <h6 className="subtitle is-5 mb-4">{ item.descrip }</h6>  
            <p className="title is-4 mt-1 mb-6">  
            Precio: $<strong  
            className="size-3"     
            >{ item.price }</strong></p>      
            <p className="subtitle is-6 mb-2">Stock: { item.stock }</p>     
          </div>        
         <Card.Footer className="card-footer-count">   
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
            <div className="footer-volver-detail d-block flex-column"> 
            <Link to={'/'} className=" button is-dark is-outlined" 
                >   
                 Volver           
            </Link>      
            </div>  
       </Card.Content>           
     </Card> 
  )
}
