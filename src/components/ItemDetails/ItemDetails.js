import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetails = ({ id, name, img, descrip, stock, price }) => {

  return (    
      <div className="card-img"> 
      <h5 className="title is-5">{ name }</h5>
          <figure className="image"> 
            <img src={ img } alt={ name } />  
          </figure>          
 
        <div className="card-content">
          <div className="media-content">
            <h6 className="subtitle is-6">{ descrip }</h6>  
            <p>Precio: ${ price }</p> 
            <ItemCount   
              initial={ 1 }  
              stock={ stock } 
              onAdd={(quantity) => console.log("Su cantidad es: ", quantity )}
            />   
          </div>  
        
 
       </div>  

     </div>
  )

}
