import React, { useState ,useEffect } from 'react';
import Products from './Products';
import {useParams} from 'react-router-dom';
import Item from './ItemList';



export const ItemListContainer = () =>{

  const [data, setData] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const getData = new Promise (resolve => {
      setTimeout(() =>{
          resolve(Products);
      },1000);
    });

    if (categoryId) {
      getData.then(res => setData(res.filter(Products => Products.category === categoryId)));
    } else {
      getData.then(res => setData(res));
    }
  
  }, [categoryId])
  

  return(
<> 
    { !categoryId}
    <Item data={data}/>

</>   

  )
}

export default ItemListContainer