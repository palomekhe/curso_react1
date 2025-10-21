import { ShoppingCartSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/productCard.css'
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from "react";
import AlertaProductoAgregadoCarrito from "./AlertaAgregarCarrito";

export default function ProductCard({producto}){
    const {agregarCarrito} = useContext(CarritoContext);
    const tieneDesc = producto.discount && producto.discount > 0;
    const  precioFinal = tieneDesc 
    ? producto.precio * (1 - producto.discount / 100)
    : producto.precio;

    return(
        <>
            <div className="product-card">
                {tieneDesc && (
                    <div className="discount-badge">{producto.discount}% OFF</div>
                )}
                <img className="imagen-producto" src={producto.image} alt={producto.nombre} />

                <div className="info-producto">
                    <h4>{producto.nombre}</h4>
                    <div className="container-precio-producto">
                        {
                            tieneDesc && (
                                <span className="precio-original">${Number(producto.precio).toLocaleString('es-AR')}</span>
                            )}
                        <span className="precio-final">${Number(precioFinal).toLocaleString('es-AR')}</span>
                    </div>
                </div>

                <div className="accion-producto">
                    <IconButton onClick={() => {
                        agregarCarrito(producto);
                    }}>
                        <ShoppingCartSharp className="BotonIcono"/>
                    </IconButton>
                    <Link className="BotonVerMas" to={`/productos/${producto.id}`}>Ver Más</Link>
                </div>
            </div>
        </>
    )
}

