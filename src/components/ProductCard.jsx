import { ShoppingCartSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/productCard.css'

export default function ProductCard({producto}){
    const tieneDesc = producto.discount && producto.discount > 0;
    const  precioFinal = tieneDesc 
    ? producto.price * (1 - producto.discount / 100)
    : producto.price;

    return(
        <>
            <div className="product-card">
                {tieneDesc && (
                    <div className="discount-badge">{producto.discount}% OFF</div>
                )}
                <img className="imagen-producto" src={producto.foto} alt={producto.product} />

                <div className="info-producto">
                    <h4>{producto.product}</h4>
                    <div className="container-precio-producto">
                        {
                            tieneDesc && (
                                <span className="precio-original">${Number(producto.price).toFixed(2)}</span>
                            )}
                        <span className="precio-final">${Number(precioFinal).toFixed(2)}</span>
                    </div>
                </div>

                <div className="accion-producto">
                    <IconButton>
                        <ShoppingCartSharp className="BotonIcono"/>
                    </IconButton>
                    <Link className="BotonVerMas" to={`/productos/${producto.id}`}>Ver Más</Link>
                </div>
            </div>
        </>
    )
}

