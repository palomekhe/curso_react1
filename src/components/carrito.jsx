import React from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'; 
import "../styles/carrito.css"
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, eliminarDelCarrito, calcularTotal} = useContext(CarritoContext);
  const total = calcularTotal();

  if( carrito.length === 0){
    return(
      <div>
        <h2>Carrito</h2>
        <p style={{color:" #000"}}>Aún no tienes ningún artículo</p>
      </div>
    )
  }
  
  return (
    <div>
      <hr />
      <h2>Carrito</h2>
      <div className="carrito-container">
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id} className="carrito-item">
              <p>x{producto.cantidad}</p>
              <img src={producto.image} alt={producto.nombre} className="carrito-item-img"/>
              <div className="carrito-item-info">
                
                <p>{producto.nombre}</p>
                <div className='precios'>
                  <p className='precio-1'>${ (producto.precioFinal).toLocaleString('es-AR') }</p>
                  {producto.cantidad > 1 && (
                    <p className='precio-2'>${(producto.precioFinal * producto.cantidad).toLocaleString('es-AR')}</p>)}
                </div>
              </div>
              <IconButton className="item-delete-btn" onClick={()=> eliminarDelCarrito(producto.id)}>
                <DeleteIcon className='BotonEliminar'/>
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="carrito-total">
          {total > 0 && (
            <>
              <h3>Total: ${calcularTotal().toLocaleString('es-AR')}</h3> 
              <div className='vaciarCarrito'>
                <IconButton onClick={ () => vaciarCarrito()}>
                  <DeleteIcon className='BotonEliminar'/>
                </IconButton>
              </div>
            </>
          )}
      </div>
    </div>
  );
}  
