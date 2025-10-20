import React, {createContext, useState} from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({children}){
    const [carrito, setCarrito] = useState([]);
    
    function agregarCarrito(producto){
        const descuento = producto.discount || 0;
        const precioFinal = producto.precio * (1 - descuento / 100);

        const productoConPrecioFinal = {
            ...producto,
            precioFinal,
        };

        setCarrito((prev) => [... prev, productoConPrecioFinal] );
    }

    const eliminarDelCarrito = (indiceDelete) => {
        setCarrito(carrito.filter((_,indice)=> indice !== indiceDelete))
    }

    const vaciarCarrito = ()=> {
        setCarrito([]);
    }

    function calcularTotal() {
        return carrito.reduce((total, producto) => total + producto.precioFinal, 0);
    }

    return(
        <CarritoContext.Provider value={{carrito, calcularTotal, agregarCarrito, vaciarCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}