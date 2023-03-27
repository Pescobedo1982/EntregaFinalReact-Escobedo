
import React from 'react'
import '../Containers/item.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';



const Item = ({product}) => {
  const {addItem} = useCartContext()
  return (
     <Link className='pack'>
      <img src={product.image} alt="product" />
        <p>Pack 1.0 </p>
    </Link>
  )
}

export default Item