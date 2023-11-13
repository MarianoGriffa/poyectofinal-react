import  { NavBar }  from "./components/NavBar/NavBar";
import  ItemListContainer  from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailsContainer }  from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart"; 
import { Checkout } from "./components/Checkout/Checkout"; 
import { Footer } from "./components/Footer/Footer"; 
import "bulma/css/bulma.css";        
import 'bulma/css/bulma.min.css';   
import "./index.css";                
     
 export default function App() {    
  return (  
    <div>    
   <BrowserRouter>    
   <CartProvider>     
     <NavBar />    
      <Routes> 
        <Route path='/' element={<ItemListContainer />}/> 
        <Route path='/category/:categoryId' element={<ItemListContainer  />}/>
        <Route path='/item/:itemId' element={<ItemDetailsContainer />} />
        <Route path='/cart' element={<Cart />} />  
        <Route path='/checkout' element={<Checkout />} />  
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />  
     </Routes>          
      <Footer />    
     </CartProvider>       
   </BrowserRouter>      
    </div>                   
       
 
  ); 
} 

  