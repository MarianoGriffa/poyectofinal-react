
import { Link } from "react-router-dom";

export const Item = ({ id, img, name, category, price, stock }) => {
  return (
  <div className="container">   
    <section>
    <div className="columns"> 
 
    <div className="column">     

      <div className="card-img"> 
          <figure className="image is-1by1">
            <img src={ img } alt={ name } />
          </figure>      

        <div className="card-content">
          <h4 className="title is-4">{ name }</h4>
          <div className="media-content"> 
            <p>Precio: ${ price }</p> 
            <p>Stock: { stock }</p> 
            <footer > 
            <Link to={`/item/${id}`}  
            className="button is-info is-fullwidth"
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
