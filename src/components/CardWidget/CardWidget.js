import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-bulma-components";
import bolsoshopping from "../../assets/bolsoshopping.webp";
    
export const CardWidget =  () => {   
  const { quantityTotal } = useContext(CartContext); 

  const navigate = useNavigate();  
  const handleViewCart = () => navigate("/cart");
  
  return ( 
      <button   
          className="bag"     
          onClick={handleViewCart}>  
          <img src={bolsoshopping} alt="Carrito" />
          <span className={ quantityTotal() > 0 ? 'NumberBag' : 'NumberBagHide' }>
          { quantityTotal() !== 0 && quantityTotal()}    
          </span>
          <span className="text-pedido">Mi pedido</span>
      </button>       
  )
  }       
 

