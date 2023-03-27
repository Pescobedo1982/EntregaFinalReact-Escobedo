import React from 'react'
import CartWidget from '../CartContext/CartWidget';
import { NavLink } from 'react-router-dom';
import Logos from '../img/Logos.png';

const Navbar = () => {


  return (
    <nav className='navbar'>
      
      <img className='logo' src={Logos} />
      <a><NavLink to='/cart'>Carrito
            <CartWidget />
          </NavLink></a>
      <a><NavLink to='/category/:category~Id'>Productos </NavLink></a>
      <a><NavLink to='/category'>Contacto </NavLink></a>
      
    
    </nav>
    
)
}

export default Navbar