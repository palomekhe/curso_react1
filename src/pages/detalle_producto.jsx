import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import "../styles/detalle_producto.css"
import { ShoppingCartSharp } from '@mui/icons-material';
import { supabase } from "../APIs/supabaseClient";
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

export default function ProductoDetalle(){
  const {agregarCarrito} = useContext(CarritoContext);
  const {id} = useParams();
  const [producto, setProducto] = useState(null);
  
  useEffect( ()=>{
    async function obtenerProducto(){
      const {data, error} = await supabase
      .from('productos')
      .select(`
        *,
        categoria:categoria_id (id, nombre)
        `)
        .eq('id',id)
        .single();
        if(!error) setProducto(data);
      }
      obtenerProducto();
    },[id]);
    
    if(!producto) return <p>Cargando...</p>
    const descuento = producto.discount || 0;
    const precioFinal = producto.precio * (1 - descuento / 100);

  return (
    <div className="product-detail-container">

      <div className="product-image-section">
        <img src={producto.image} alt={producto.title} />
      </div>


      <div className="product-info-section">
        <p className="product-category">categoría: {producto.categoria?.nombre}</p>
        <h1 className="product-title">{producto.nombre}</h1>
        <div className="container-precio-producto">
          {
              descuento && (
              <span className="precio-original">${Number(producto.precio).toLocaleString('es-AR')}</span>
          )}
            <span className="product-price">${Number(precioFinal).toLocaleString('es-AR')}</span>
        </div>
        <p className="product-description">{producto.descripcion}</p>
        

        <div className="product-actions">
          <div className="quantity-selector">
            <label style={{color:"#000"}} htmlFor="quantity">Cantidad:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
          <button className="add-to-cart-btn" onClick={()=> {
            agregarCarrito(producto);
          }}>
            <ShoppingCartSharp fontSize="small" />
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}