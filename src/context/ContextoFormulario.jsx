import { createContext } from "react";
import { Children } from "react/cjs/react.production.min";
import { useState } from "react";

// Aqui debemos crear nuestro contexto y nuestro provider.
 export const PokeContext = createContext()
 export const PokeProvider = ({children})=> {
   const [poke, setPoke] = useState([])
   return (
    <PokeContext.Provider 
        value={{poke, setPoke}}
    >
        {children}
    </PokeContext.Provider>
   )

 } 