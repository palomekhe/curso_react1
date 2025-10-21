import '../styles/AlertaAgregarCarrito.css'
export default function AlertaProductoAgregadoCarrito({mensaje}){
    return(
        <div className="alerta-carrito"> 
            {mensaje}
        </div>
    );
}