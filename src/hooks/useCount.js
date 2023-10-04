
import { useState } from "react";

export const useCount = ( initialValue= {} ) => {
   
  const [ counter, setCounter ] = useState(initialValue);  

     const increment = () =>  setCounter( counter + 1 ) 
     const decrement = () =>  setCounter( () => (counter > 0) ? counter - 1 : counter )   
   
  return {   
    counter,     
    increment, 
    decrement, 
  }
     
}