import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import "../styles/detalle_producto.css"
import { ShoppingCartSharp } from '@mui/icons-material';

export default function ProductoDetalle(){
    const {id} = useParams();
    const [producto, setProducto] = useState(null);
    useEffect( () => {
        try{
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then( (respuesta) => respuesta.json() )
                .then( (datos) => {setProducto(datos)} )
        } catch(error){
            console.log("Se produjo un error en la carga del articulo");
            console.error('Error', error);
            if(error) return <h2>{error}</h2>
        }
    }, [id] )

    if(!producto) return <p>Cargando...</p>



  return (
    <div className="product-detail-container">

      <div className="product-image-section">
        <img src={producto.image} alt={producto.title} />
      </div>


      <div className="product-info-section">
        <p className="product-category">{producto.category}</p>
        <h1 className="product-title">{producto.title}</h1>
        <p className="product-price">${Number(producto.price)}</p>
        <p className="product-description">{producto.description}</p>
        

        <div className="product-actions">
          <div className="quantity-selector">
            <label htmlFor="quantity">Cantidad:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
          <button className="add-to-cart-btn">
            <ShoppingCartSharp fontSize="small" />
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}