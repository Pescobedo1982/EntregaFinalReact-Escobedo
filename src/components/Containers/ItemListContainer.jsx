import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../Containers/ItemDetailContainer';
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
 const [setData ]= useState();
 const categoriaId = useParams();
 useEffect(() => {
  const querydb = getFirestore();
  const queryCollection = collection(querydb, 'products');
  if (categoriaId) {
     const queryFilter = query(queryCollection, where('category', '===', categoriaId));
     getDocs(queryFilter)
     .then(res => setData(res.docs.map(Products => ({id: Products.id, ...Products.data()}))));
  } else{
    getDocs(queryCollection)
    .then(res => setData(res.docs.map(Products => ({id: Products.id, ...Products.data()}))));
  }
}, [categoriaId]);

  return (
    <div>
      <ItemDetailContainer greeting="Hola" />
     
      <ItemList/>
    </div>
  );
} 

export default ItemListContainer