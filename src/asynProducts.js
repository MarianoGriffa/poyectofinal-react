
/*  camisetas: 
1. https://unsplash.com/es/fotos/WWesmHEgXDs blanca
 2. https://unsplash.com/es/fotos/6Nub980bI3I negra
 3.https://unsplash.com/es/fotos/aMj4K3a-nYQ  azul
 5.https://unsplash.com/es/fotos/_z5gR67v4NI roja
*/


const products = [ 
  //camisetas
  {
    id: '1',
    name: 'Camiseta H&M',
    price: 8000,
    category: 'camisetas',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtaXNldGFzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 
    stock: 25,   
    descrip: 'Camiseta blanca H&M'  
  }, 
  //camperas  
  {
    id: '2',
    name: 'Campera Verde You',
    price: 38000,
    category: 'camperas', 
    img: 'https://images.unsplash.com/photo-1633931764492-8ecb7742ebc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGphY2tldCUyMGdyZWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    stock: 7,   
    descrip: 'Campera Verde'   
  },
  //Buzos
  {
    id: '3',
    name: 'Buzo Negro',
    price: 17000,
    category: 'buzos',
    img: 'https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1ZGFkZXJhcyUyMG5lZ3Jhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    stock: 15,  
    descrip: 'Buzo Negro You'  
  },  
  //Jeans
  {
    id: '4',
    name: 'Jeans Hombre',
    price: 22000,  
    category: 'jeans',
    img: 'https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    stock: 15,
    descrip: 'jeans originales' 
  }, 
] 

export const getProducts = () => {
    return new Promise((resolve) => {

       setTimeout(() => {
           resolve(products);   
       }, 500)   
 
 
    })    
}

export const getProductsById = ( productId ) => {
  return new Promise((resolve) => {

     setTimeout( () => {
         resolve(products.find(prod => prod.id === productId));    
     }, 500)    
 
  })   
 }

 export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => { 
 
     setTimeout( () => { 
         resolve(products.filter(prod => prod.category === categoryId));    
     }, 500)       
 
  })  
 }