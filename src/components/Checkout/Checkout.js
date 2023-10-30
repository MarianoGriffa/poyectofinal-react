// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { Button, Container, Content, Form } from "react-bulma-components";
import { useNavigate } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "bulma/css/bulma.css";
import "../../index.css";   

export const Checkout = () => {
  // const { cart, totalPrice } = useContext(CartContext)

  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '', 
    repeatEmail: ''
  }) 

  const navigate = useNavigate();
  const handleBackToCart = () => navigate("/cart");

const handleOnChange = (evt) => {
   setDataForm({
    ...dataForm,
    [evt.target.name]:[evt.target.value]
   })    
} 


  return (
    <>
      <h3 className="title is-3 is-spaced">Finalizar compra!</h3>
      <Container className="container-form">
        <Content className="content-form">
        <Form.Field>
            <Form.Field> 
              <Form.Label>Nombre:</Form.Label>
              <Form.Input
                type="text"  
                name="name"
                value={dataForm.name}
                onChange={handleOnChange}
                placeholder="Nombre"
              /> 
            </Form.Field>

            <Form.Field>
              <Form.Label>Teléfono:</Form.Label>
              <Form.Input
                type="number"  
                name="phone" 
                value={dataForm.phone}
                onChange={handleOnChange}
                placeholder="Ingresá tu teléfono"
              />
            </Form.Field> 

            <Form.Field>
              <Form.Label>Email:</Form.Label>
              <Form.Input
                type="email"
                name="email"
                placeholder="Ingresá tu email"
                value={dataForm.email}
                onChange={handleOnChange}
              /> 
            </Form.Field> 

            <Form.Field className="mb-3">
              <Form.Label>Repetir email:</Form.Label>
              <Form.Input 
                type="email" 
                name="repeatEmail"
                value={dataForm.repeatEmail}
                onChange={handleOnChange}
                placeholder="Reingresá tu email"
              />  
            </Form.Field> 
            <Form.Field className="footer-form" >
            <Button className="footer-volver button is-dark is-outlined"
             onClick={handleBackToCart}  
            >  
              Volver al carrito 
            </Button>   
            <div colSpan="4"></div>
            <Button className="button is-primary" type="submit">
              Finalizar compra 
            </Button>       
            </Form.Field>  
            </Form.Field>
        </Content> 
      </Container>
    </>
  );
}
