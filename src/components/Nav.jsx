// En tu archivo Nav.js
import { Link } from "react-router-dom";
import "../styles/header_nav.css";


export default function Nav({ menuAbierto, setMenuAbierto }) {
    const handleLinkClick = () => {
        setMenuAbierto(false);
    };

    return (
        <nav className={`header-center ${menuAbierto ? 'mobile-nav-open' : ''}`}>
            <ul>
                <li><Link to="/" onClick={handleLinkClick}>Inicio</Link></li>
                <li><Link to="/nosotros" onClick={handleLinkClick}>Nosotros</Link></li>
                <li><Link to="/ofertas" onClick={handleLinkClick}>Ofertas</Link></li>
            </ul>
        </nav>
    );
}