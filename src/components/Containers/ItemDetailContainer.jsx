import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const {detalleId} = useParams();
  
  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", detalleId);
    getDoc(queryDoc)
    .then(res => setData({id: res.id , ...res.data()}))

  },[])
  return (
    <div>
     <ItemDetail/>
    </div>
  )
}

export default ItemDetailContainer