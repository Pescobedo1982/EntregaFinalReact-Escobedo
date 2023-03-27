import React, {useState, useContext} from 'react'

export const CartContext = React.createContext([]);

// Agregar al carrito:
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

//    Carrito vacio
const [cart, setCart]=  useState([]);

// Limpiar el carrito:
const clearCart = () => { setCart([]) }

// Para saber si un producto esta en el carrito:

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

// Borrar el carrito:
const removeItem = (id) => { setCart(cart.filter(product => product.id !== id)) }



// Calcular el total de los productos
const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
}

// Calcular el total de los productos
const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeItem,
        totalPrice,
        totalProducts,
        cart

    }}>
        {children}
    </CartContext.Provider>  )
}

export default CartProvider;