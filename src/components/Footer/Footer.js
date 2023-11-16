import React from 'react';
import { Container, Content } from 'react-bulma-components';
 
export const Footer = () => { 
  return (
          <footer>
            <Container> 
              <Content style={{ textAlign: 'center'}}>
                <p>  
                  <strong>KiwiStore</strong> por {''}  
                  <a href="mailto:someone@example.com">Griffa Mariano</a> 
                   © Todos los derechos reservados - 2023.  
                </p>          
              </Content>    
            </Container>   
          </footer>   
  );  

}
