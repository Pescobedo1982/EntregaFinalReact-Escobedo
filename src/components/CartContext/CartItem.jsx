import React from 'react'
import './CartItem.css'
import Products from '../Containers/Products'

const CartItem = () => {
  return (
    <div className='itemCart'>
        <div>
            <img src="{Products.image}" alt="{Products.title}" />
        </div>
        <div>
        <p>Titulo: {Products.title}</p>
        <p>Precio u.: {Products.price}</p>
        <p>Subtotal: </p>
        <button>Eliminar</button>
        </div>
   </div>
  )
}

export default CartItem