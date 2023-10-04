import  { NavBar }  from "./components/NavBar/NavBar";
import  ItemListContainer  from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bulma/css/bulma.css";    
import "./index.css";         
   

 export default function App() {  
  return ( 
    <div>  
   <BrowserRouter>      
     <NavBar />   
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailsContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
     </Routes>     
   </BrowserRouter> 
    </div>               
     
 
  ); 
} 

  