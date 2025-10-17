import '../styles/Modal.css'

export default function ModalCarrito({onClose, children}){
    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };
    return(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
    )
}