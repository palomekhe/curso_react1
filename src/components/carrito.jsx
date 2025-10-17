import React from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'; 
import "../styles/carrito.css"
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';

export default function CarritoCompras() {
  const { carrito, vaciarCarrito, eliminarDelCarrito} = useContext(CarritoContext);
  const total = carrito.reduce((sum, producto) => sum + producto.price, 0);
  return (
    <div>
      <hr />
      <h2>Carrito</h2>
      <div className="carrito-container">
        <ul>
          {carrito.map((producto,indice) => (
            <li key={indice} className="carrito-item">
              <img src={producto.image} alt={producto.title} className="carrito-item-img"/>
              <div className="carrito-item-info">
                <p>{producto.title}</p>
                <p>{producto.price}</p>
              </div>
              <IconButton className="item-delete-btn" onClick={()=> eliminarDelCarrito(indice)}>
                <DeleteIcon className='BotonEliminar'/>
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="carrito-total">
          {total > 0 && (
            <>
              <h3>Total: ${total.toFixed(2)}</h3> 
            </>
          )}
      </div>

    </div>
  );
}  
