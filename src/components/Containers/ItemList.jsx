import React from 'react';



const Item = ({data}) => {

const Cerrado = () =>{
  alert ("EL LOCAL SE ENCUENTRA CERRADO EN ESTOS MOMENTOS")
}
  return (
    <div className='row'>
      {data.map ((Products) =>
      <div className='col'>
      <img style={{ height: "15rem" }} src={Products.image} alt='imagen producto'/>
      <div className='text'>
        <h3>{Products.title}</h3>
        <p>precio ${Products.price}</p>
        <button className='button' onClick={Cerrado}>Comprar</button>
      </div>
      </div>

    

)} 
</div>

  )
}
export default Item
