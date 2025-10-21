import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import logo from '../assets/hook_logo2.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../styles/header_nav.css";
import ModalCarrito from './ModalCarrito';
import CarritoCompras from './carrito';
import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import { Badge } from '@mui/material';

export default function Header() {
    // 2. El estado para controlar el menú ahora vive aquí
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [modalCarrito, setModalCarrito] = useState(false);
    const {CalcularTotalDeItems} = useContext(CarritoContext);
    const totalItems = CalcularTotalDeItems();



    return (
        <header className="main-header">
            <div className="header-left">
                <Link to="/">
                    <img src={logo} alt="Logo de la empresa" className="logo" />
                </Link>
            </div>
            
            <Nav 
                menuAbierto={menuAbierto} 
                setMenuAbierto={setMenuAbierto}
            />

            <div className="header-right">
                <IconButton onClick={() => setModalCarrito(true)} aria-label="Ver carrito de compras" className="cart-icon-btn">
                    <Badge badgeContent={totalItems} color='error'>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <button className="hamburger-menu" onClick={() => setMenuAbierto(!menuAbierto)}>
                    {menuAbierto ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>
            {modalCarrito && (
                <ModalCarrito onClose={() => setModalCarrito(false)}>
                    <CarritoCompras/>
                </ModalCarrito>
            )}

        </header>
    );
}