import React, { useContext } from "react";
import "bulma/css/bulma.css";       
import 'bulma/css/bulma.min.css'; 
import { Button, Container, Content, Form } from "react-bulma-components";
import '../../index.css';
import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
   
  export const Checkout = () => {  

    // const {totalPrice} = useContext(CartContext);
 
     const navigate = useNavigate()
     const handleBackToCart = () => navigate('/cart') 
     
      return (
        <>
        <h3 className="title is-3 is-spaced">Finalizar compra</h3>     
        <Container className="container-form">  
        <Content className="content-form">   
        <Form.Field>     
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control className="control"> 
          <Form.Input className="input" type="text" placeholder="Text input" required/> 
        </Form.Control>  
      </Form.Field> 

      <Form.Field> 
        <Form.Label>Número de celular</Form.Label>
        <Form.Input className="input"  required
         type="tel" name="phone" placeholder="123456789" pattern="[0-9]{9}" maxLength="9"
        /> 
      </Form.Field>  
       
      <Form.Field>  
        <Form.Label className="label">Email</Form.Label>
        <Form.Control className="control has-icons-left has-icons-right">
          <Form.Input className="input is-danger" type="email" placeholder="nombre@example.com" />     
        </Form.Control> 
      </Form.Field> 
        
      <Form.Field> 
        <Form.Label className="label">Repetir Email</Form.Label>
        <Form.Control className="control has-icons-left has-icons-right">
          <Form.Input className="input is-danger" type="email"
            name="emailRepeat" placeholder="nombre@example.com"
          />   
        </Form.Control> 
      </Form.Field>

      <Form.Field>
        <Form.Control>  
          <div className="select">
            <Form.Select>  
              <option>Tipo de pago</option>
              <option>Efectivo</option>
              <option>Tarjeta debito/credito</option>
            </Form.Select> 
          </div>   
        </Form.Control> 
      </Form.Field>
       
      <Form.Field>
        <Form.Label >Mensaje</Form.Label>
        <Form.Control className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </Form.Control>
      </Form.Field>
       
      </Content> 
         <div className="footer-form">     
              <div className="footer-volver">
                <Button 
                className="btn-back-menu button is-normal is-info is-outlined" 
                onClick={handleBackToCart}>     
                Volver a carrito</Button>   
              </div>   
              <div colSpan="4"></div>           
              <div>        
                <Button 
                className="button is-success" 
                >   
                Enviar</Button>  
              </div>    
          </div>
      </Container>
      </>
 )     
} 
  