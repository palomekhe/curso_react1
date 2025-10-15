import { Link } from "react-router-dom";
import "../styles/header_nav.css"

function Nav(){
    return (
    
        <nav className="header-center">
                <ul>
                    <li>
                        <Link to="/" >Inicio</Link>
                    </li>
                    <li>
                        <Link to="/tendencias" >Tendencias</Link>
                    </li>
                    <li>
                        <Link to="/ofertas" >Ofertas</Link>
                    </li>
                </ul>
        </nav>
        
    );
}

export default Nav;