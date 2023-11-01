import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Container, Button } from 'react-bulma-components';
import { Link, useNavigate }  from "react-router-dom"; 
import './Cart.css';                 
         
export const Cart = () => {              
   
  const { cart, removeItem, clearCart, totalPrice, subtractQuantity, addQuantity } = useContext(CartContext) 
  
  const navigate = useNavigate();   

  const handleBackToMenu = () => navigate("/");
  const handleGoToCheckout = () => navigate("/checkout"); 
 
if (cart.length === 0) {      
  return (
    <div className="container-pedido-void"> 
      <h1 className="title is-2">MI PEDIDO</h1>
      <h2 className="subtitle">Tu carrito está vacío :(</h2>
      <div className="empty-cart-container"> 
        <div>    
          <img    
           className="image-bagx"
           src="bag-x.svg" alt="Carrito vacío" />  
           <div> 
           <Button className="button is-dark is-light"
           onClick={handleBackToMenu}>Volver al menú</Button> 
           </div> 
        </div>            
      </div>      
    </div> 
  )
 } else {
  return ( 
    <Container className="app-content"> 
      <h2 className="title-cart">Mi Pedido</h2>
      <div className="container-table">   
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">  
          <thead>        
            <tr> 
              <th className="title is-5">Producto</th>
              <th className="title is-5">Nombre</th>
              <th className="title is-5">Precio</th>
              <th className="title is-5">Cantidad</th>
              <th className="title is-5">Subtotal</th>    
            </tr>    
          </thead>    
          <tbody className="body-cart cell-text-align">
            {cart.map((cartItem) => (  
              <tr key={cartItem.id}>   
                <td className="divider-card-cart"> 
                  <Link to={`/item/${cartItem.id}`}  
                    className="info-card-cart">
                    <img className="image is-64x64 img-pedido" 
                    src={cartItem.imgUrl} alt={cartItem.name} /> 
                    <div>  
                    </div>   
                  </Link>             
                </td>
                <td className="text-card-cart text-center divider-card-cart">  
                <p className="subtitle is-6">{cartItem.name}</p>
                </td>
                <td className="text-card-cart text-center divider-card-cart" >${cartItem.price}</td>
                <td className="text-card-cart divider-card-cart">
                  <Button className="btn-count-cart button is-info is-small" 
                  onClick={() => subtractQuantity(cartItem.id)}
                   disabled={cartItem.stock === 0}>-</Button>
                  <span> {cartItem.quantity} </span>  
                  <Button  
                  className="btn-count-cart button is-info is-small"
                   onClick={() => addQuantity(cartItem.id)}
                    disabled={cartItem.stock === 0}>
                  +
                  </Button>
                </td> 
                <td className="text-card-cart text-center divider-card-cart">${cartItem.quantity * cartItem.price}</td>
                <Button className="img-eliminar button is-danger"   
                  onClick={() => removeItem(cartItem.id)} >    
                  <img src="icon-trash.png" alt="Delete" />                 
                  </Button>                        
              </tr>     
            ))}  
          </tbody>
          
        </table>  
      </div>  
      <div className="table-footer">     
              <div>   
                <Button 
                className="btn-empty-cart button is-danger" 
                onClick={clearCart}>
                Vaciar carrito</Button> 
              </div>   
              <div className="total-price-cart"
               colSpan="4">TOTAL: ${totalPrice()}</div>          
              <div> 
                <Button 
                className="btn-continue-buy button is-success" 
                onClick={handleGoToCheckout}>   
                Continuar compra</Button> 
              </div>   
          </div>
      <div className="container-volver">
                <Button 
                className="btn-back-menu button is-normal is-info is-outlined" 
                onClick={handleBackToMenu}>     
                Volver</Button>  
              </div>        
    </Container>  
  )
 }
  }

    
