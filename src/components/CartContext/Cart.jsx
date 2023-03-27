
import React from 'react';
import {useCartContext} from '../CartContext/CartContext';
import CartItem from '../CartContext/CartItem';
import { getFirestore } from 'firebase/firestore';

const Cart = () => {

 const {cart, totalPrice}= useCartContext();

 const order = {
    buyer: {
        name: 'Pepito',
        phone: '123456789',
        email: ' pepito@gmail.com',
        adress: 'Garzon 2767'  
    },
    items: cart.map(Products => ({ id: Products.id, title: Products.title, price: Products.price,})),
    total: totalPrice(),

 }
 const handleClick = () => 
    {
        const db = getFirestore();
        
        



    }
  if (cart.length === 0){ return (
    <div className='cart'>
        <h2>No hay elementos en el carrito</h2>
      
    </div>

 );
}

 return(
    <>
        {
            cart.map(Products => (<CartItem key={Products.id} Products={Products} />))
        }
    <p>Total: {totalPrice()}</p>
    <button onClick={handleClick}>Generar orden de compra</button>
   </>
 )
}

export default Cart