import  { CardWidget }   from "../CardWidget/CardWidget";  
import { Link, NavLink } from "react-router-dom";
import '../../index.css';
   
 export  const NavBar = () => {    
  return ( 
  <nav className="is-primary navbar">  
     <Link to="/" >
     <p className="title navbar-brand">KiwiStore</p> 
     </Link>   
    <div className="navbar-menu">      
     <div className="navbar-start">    
        <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' :    'Option' }>Todos</NavLink>  
        <NavLink to={`/category/camisetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Camisetas</NavLink>
        <NavLink  to={`/category/buzos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Buzos</NavLink>
        <NavLink to={`/category/camperas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Camperas</NavLink>
    </div>                  
     </div>             
   
    <CardWidget />                 
  </nav>   

  )

}