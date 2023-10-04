import  { CardWidget }   from "../CardWidget/CardWidget";  
import { Link, NavLink } from "react-router-dom";
  
 export  const NavBar = () => {    
  return ( 
  <nav className="is-primary navbar"> 
     <Link to="/" >
     <p className="title navbar-brand">KiwiShore</p> 
     </Link>  
    <div className="navbar-menu">     
     <div className="navbar-start">  
        <NavLink to={`/category/camisetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Camisetas</NavLink>
        <NavLink  to={`/category/buzos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Buzos</NavLink>
        <NavLink to={`/category/camperas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Camperas</NavLink>
        <NavLink to={`/category/jeans`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Jeans</NavLink>
    </div>                  
     </div>          
   
    <CardWidget />                
  </nav>   

  )

}