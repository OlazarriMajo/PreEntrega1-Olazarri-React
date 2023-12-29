import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'



const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" ><img className="logo" src="../assets/Pescalandia.png" alt="Logo" /></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/Peces">Peces</Link></li>
            <li><Link className="menu-link" to="/productos/Plantas">Plantas</Link></li>
            <li><Link className="menu-link" to="/productos/Accesorios">Accesorios</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar