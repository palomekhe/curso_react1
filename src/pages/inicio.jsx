import ProductosApiPro from "../components/productos";
import CarritoCompras from "../components/carrito";
import { useState } from "react";


function Inicio() {
    const [carrito, setCarrito] = useState([]);

    function agregarCarrito(producto){
        setCarrito((prev) => [... prev, producto] );
        setTotalCarrito(prevTotal => Number(prevTotal) + Number(producto.price));

    }

    const eliminarDelCarrito = (indiceDelete) => {
        setCarrito(carrito.filter((_,indice)=> indice !== indiceDelete))
    }

  return (
    <>  
        <div>
            
            <ProductosApiPro agregarProducto={agregarCarrito} />
            <CarritoCompras carrito={carrito} productosEliminados={eliminarDelCarrito} />
        </div>
    </>
  )
}

export default Inicio
