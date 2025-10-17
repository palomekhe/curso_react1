import React, {createContext, useState} from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({children}){
    const [carrito, setCarrito] = useState([]);
    
    function agregarCarrito(producto){
        setCarrito((prev) => [... prev, producto] );
    }

    const eliminarDelCarrito = (indiceDelete) => {
        setCarrito(carrito.filter((_,indice)=> indice !== indiceDelete))
    }

    const vaciaCarrito = ()=> {
        setCarrito([]);
    }

    return(
        <CarritoContext.Provider value={{carrito, agregarCarrito, vaciaCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}