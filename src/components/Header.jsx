import Nav from "../components/Nav"
import logo from '../assets/hook_logo2.png'
import { Link } from "react-router-dom";
import "../styles/header_nav.css"

function Header() {
    return (
        <>
            <header className="main-header">
                <Link to="/">
                    <img src={logo} alt="" width={"170px"} height={"auto"} />
                </Link>
                <Nav></Nav>     
                <div className="header-right"></div>
            </header>
        </>
    )
}

export default Header;