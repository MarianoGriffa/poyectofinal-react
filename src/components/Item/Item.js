import { memo } from 'react';
import { Link } from "react-router-dom";

export const Item =  memo(  ({ item } ) => {
     
  return ( 
  <div className="container" key={item.id}>  
    <section>  
    <div className="columns">    
  
    <div className="column">        
 
      <div className="card-img">  
          <figure className="image is-1by1 image-category">
            <img src={ item.imgUrl } alt={ item.name } /> 
          </figure>             
 
        <div className="card-content">  
          <h5 className="subtitle is-6">{ item.name }</h5>
          <div className="media-content"> 
            <h6 className="title is-5">Precio: ${ item.price }</h6>  
            <footer >   
            <Link to={`/item/${item.id}`}     
            className="button is-info"
            >Ver detalle</Link>       
            </footer>   
          </div>    
  
        </div>   
       </div>  
     </div>
     </div>
     </section>  
   </div>
 
  ) 
} 
)
