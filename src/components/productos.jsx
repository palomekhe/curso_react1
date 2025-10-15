import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import '../styles/productos.css'
import { ShoppingCartSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";


export default function ProductosApiPro({agregarProducto}){
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState();

    const truncateTexto = (texto, maxLength) => {
        if (texto.length > maxLength) {
            return texto.substring(0, maxLength) + '...';
     }
        return texto;
    };

    useEffect( () =>{
        try{
            fetch('https://fakestoreapi.com/products')
                .then( (respuesta) => respuesta.json() )
                .then( (datos) => {setProductos(datos); setCargando(false)} )
        } catch(error){
            console.log("Se produjo un error en la carga de productos");
            console.error('Error',error);
            setCargando(false);
        }
    }, []);
    
    if(cargando) return <h2>Cargando productos...</h2>
    if(error) return <h3>{ error }</h3>

    return(
        <div>
            <h2 className="titulo">Productos</h2>
            <div className="product-grid">
                {
                productos.map( (producto) => (
                    <div key={producto.id} className="product-card"> 
                        <img src={producto.image} alt={producto.title} height={"100px"} />
                        <div className="product-info">
                            <h4>{truncateTexto(producto.title, 40)}</h4>
                            <p className="product-price">${Number(producto.price)}</p>
                        </div>
                        <div className="product-card-actions">
                            <IconButton  onClick={() => agregarProducto(producto)}>
                                <ShoppingCartSharp className="BotonIcono"/>
                            </IconButton>
                            <Link className="BotonVerMas" to={`/productos/${producto.id}`} >Ver Más</Link>
                        </div>
                    </div>
                    ) )
                }
            </div>

            
        </div>
        
    )

}

