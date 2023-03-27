

import React from 'react'
import CartWidget from '../CartContext/CartWidget';
import { NavLink } from 'react-router-dom';
import Logos from '../img/Logos.png';

const Navbar = () => {


  return (
    <nav className='navbar'>
      
      <img className='logo' src={Logos} />
      <a>Nosotros<NavLink to='/cart'>
            <CartWidget />
          </NavLink></a>
      <a>Productos <NavLink to='/category/:category~Id'>Productos</NavLink></a>
      <a>Contacto <NavLink to='/category'>Asesorias</NavLink></a>
      <a><CartWidget/></a>
    
    </nav>
    
)
}

export default Navbar