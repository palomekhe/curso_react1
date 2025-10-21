import '../styles/Modal.css'
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

export default function ModalCarrito({onClose, children}){
    const {carrito} = useContext(CarritoContext);
    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };
    return(
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                
                <div className="modal-header">
                    <button className="close-icon-button" onClick={onClose}>
                        &times; 
                    </button>
                </div>
                
                <div className="modal-body">
                    {children} 
                </div>
                
                <div className="modal-footer">
                    {carrito.length !== 0 &&
                    (<button className="close-button" onClick={onClose}>
                        Finalizar Compra
                    </button>)}
                </div>

            </div>
        </div>
    )
}