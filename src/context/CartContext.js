import React,{ createContext, useState } from 'react';
// import Swal from 'sweetalert2';

export const CartContext = createContext([]);   
  
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  

  const addItem = (product) => {
    const index = cart.findIndex(prod => prod.id === product.id)
     
    if (index !== -1) {
        cart[index].quantity +=  product.quantity
        setCart( [ ...cart ] ) 
    } else {  
        setCart([...cart, product])
    }
 
}

      const subtractQuantity = (itemId) => {
        setCart((prev) =>
          prev.map((item) => {
            if (item.id === itemId && item.quantity > 1) {
              return {
                ...item, quantity: item.quantity - 1
              }
            }
            return item
          })
        )
      }
    
      const addQuantity = (itemId) => {
        setCart((prev) =>
          prev.map((item) => {
            if (item.id === itemId && item.quantity < item.stock) {
              return {
                ...item,
                quantity: item.quantity + 1
              }
            }
            return item;
          })
        )
      }
 
    //Quitar un item 
    const removeItem = (itemId) => setCart(cart.filter(product => product.id !== itemId ));     
         
     //precio total
     const totalPrice = () => cart.reduce((acc, el) => acc + (el.price * el.quantity), 0); 
 
     // cantidad total 
    const quantityTotal = () => cart.reduce((count, product) => count += product.quantity , 0)   
   
    //Vaciar carrito
    const clearCart = () => setCart([]);       
      
 
  return (
    <CartContext.Provider value={ { cart, setCart, totalPrice, addItem, removeItem, clearCart, quantityTotal, subtractQuantity, addQuantity  } } >
        { children }    
    </CartContext.Provider>    
    )  

   }

 