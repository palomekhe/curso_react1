import React, {createContext, useState} from "react";

export const CarritoContext = createContext();

export default function CarritoProvider({children}){
    const [carrito, setCarrito] = useState([]);
    const [alerta, setAlerta] = useState(null);
    
    function agregarCarrito(producto){
        setAlerta("¡Producto agregado al carrito!");
        setTimeout(()=>{setAlerta(null)}, 2500);
        
        const productoExistente = carrito.find(item => item.id === producto.id);
        
        if(productoExistente){
            setCarrito(
                carrito.map(item =>
                    item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
                )
            );
        } else {
            const descuento = producto.discount || 0;
            const precioFinal = producto.precio * (1 - descuento / 100);
            setCarrito([...carrito, {...producto, precioFinal, cantidad: 1}])
        }
    }

    const eliminarDelCarrito = (productoId) => {
        {/*setCarrito(carrito.filter((_,indice)=> indice !== indiceDelete))*/}
        setCarrito(carrito.filter(item => item.id !== productoId));
        setAlerta("Producto eliminado ❌");
        setTimeout(() => setAlerta(null), 2500);
    }

    const vaciarCarrito = ()=> {
        setCarrito([]);
    }

    function calcularTotal() {
        return carrito.reduce((total, producto) => total + producto.precioFinal * producto.cantidad, 0);
    }

    function CalcularTotalDeItems(){
        return carrito.reduce((total,producto) => total + producto.cantidad, 0)
    }

    return(
        <CarritoContext.Provider value={{ CalcularTotalDeItems, alerta, carrito, calcularTotal, agregarCarrito, vaciarCarrito, eliminarDelCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}