import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
     
export const CardWidget =  () => {   
  const { quantityTotal } = useContext(CartContext); 

  const navigate = useNavigate();  
  const handleViewCart = () => navigate("/cart"); 
   
  return (   
      <button   
          className="bag"     
          onClick={handleViewCart}>  
          <img src="bolsoshopping.webp" alt="Carrito" /> 
          <span className={ quantityTotal() > 0 ? 'NumberBag' : 'NumberBagHide' }>
          { quantityTotal() !== 0 && quantityTotal()}    
          </span>
          <span className="text-pedido">Mi pedido</span>
      </button>        
  )
  }       
 

