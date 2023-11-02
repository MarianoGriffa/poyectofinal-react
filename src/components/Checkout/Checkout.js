import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from '../../config/firebase';  
import { useState } from "react";
import {  Button, Container, Content, Form } from "react-bulma-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";  
import "bulma/css/bulma.min.css";  
import "bulma/css/bulma.css";    
import "../../index.css";      
     
export const Checkout = () => {   
    
  const [dataForm, setDataForm] = useState({
    name: '', 
    phone: '', 
    email: '',  
    repeatEmail: ''    
  })    
 
  const { cart, totalPrice, clearCart } = useContext(CartContext) 
   
  const navigate = useNavigate()  
  const handleBackToCart = () => navigate("/cart") 
  const handleBackToHome = () => navigate("/") 
 
  const generarOrden = (evt) => {    
 
    evt.preventDefault()    

    const order = {}

    order.buyer = dataForm
    order.productos = cart.map(({id, name, price}) => ({name, price, id}))
    order.total = totalPrice()     
 
    if (!dataForm.name || !dataForm.phone || !dataForm.email || dataForm.email !== dataForm.repeatEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: '¡Verifique que los campos hayan sido completados correctamente!',
        confirmButtonColor: '#d2691e', 
      })
    }
    
    else {
      const queyCollection =  collection(db, 'ordenes') 
 
      addDoc(queyCollection, order) 
      .then(response => {
        clearCart()  
        Swal.fire({
          icon: "success",
          title: "¡Pedido enviado!",
          html: "Tu orden está en proceso :) <br><br>Id: " + response.id + "<br><br>Total: $" + order.total, 
          confirmButtonText: "Aceptar", 
          background: "#ffffff",
          color: "#000000",
          confirmButtonColor: "#008040",
      }).then(() => {
        handleBackToHome()  
      })   
      }) 
      .catch(err => console.log(err))  
 
    } 
  }

  const handleOnChange = ({target})=> { 
      setDataForm({ 
          ...dataForm,
          [target.name]: target.value 
      })
  }
 
  return ( 
    <>
      <h3 className="title is-3 is-spaced">Finalizar compra!</h3>
      <Container className="container-form"> 
        <Content className="content-form">  
        <form onSubmit={generarOrden}>       
            <Form.Field>       
              <Form.Label className="label">Nombre:</Form.Label>
              <Form.Control>
              <Form.Input 
                value={dataForm.name} 
                onChange={handleOnChange} 
                type="text"    
                name="name"    
                placeholder="Nombre"
              />   
              </Form.Control>
            </Form.Field>  
  
            <Form.Field className="field"> 
              <Form.Label className="label">Teléfono:</Form.Label>
              <Form.Control className="control">
              <Form.Input  
                type="number"  
                name="phone" 
                value={dataForm.phone}
                onChange={handleOnChange}
                placeholder="Ingresá tu teléfono"
              />
              </Form.Control>
            </Form.Field>  
 
            <Form.Field >
              <Form.Label className="label">Email:</Form.Label>
              <Form.Control className="control">
              <Form.Input
                type="email"
                name="email"
                placeholder="Ingresá tu email"
                value={dataForm.email}
                onChange={handleOnChange}
              /> 
              </Form.Control>
            </Form.Field>  

            <Form.Field className="mb-4">
              <Form.Label >Repetir email:</Form.Label>
              <Form.Control>
              <Form.Input
                type="email" 
                name="repeatEmail"  
                value={dataForm.repeatEmail}
                onChange={handleOnChange} 
                placeholder="Reingresá tu email" 
              />    
              </Form.Control>
            </Form.Field> 
            <Form.Field className="field footer-form" >
            <Button className="footer-volver button is-dark is-outlined"
             onClick={handleBackToCart}   
            >     
              Volver al pedido  
            </Button>     
            <div colSpan="4"></div>
            <Button className="button is-primary" 
             type="submit"> 
               Finalizar compra   
            </Button>         
            </Form.Field>     
            </form>
        </Content>  
      </Container> 
    </>
  );
}
