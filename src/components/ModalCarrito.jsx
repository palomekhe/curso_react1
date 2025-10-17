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
                
                <div className="modal-header">
                    <button className="close-icon-button" onClick={onClose}>
                        &times; 
                    </button>
                </div>
                
                <div className="modal-body">
                    {children} 
                </div>
                
                <div className="modal-footer">
                    <button className="close-button" onClick={onClose}>
                        Cerrar
                    </button>
                </div>

            </div>
        </div>
    )
}