import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../src/components/Navbar/Navbar';
import ItemListContainer from '../src/components/Containers/ItemListContainer.jsx';
import ItemDetailsContainer from '../src/components/Containers/ItemDetailContainer';
import Cart from './components/CartContext/Cart.jsx';

import Footer from '../src/components/footer/Footer';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdBm_w5k7fmjfLRlyawnm-zD-loYFvLe4",
    authDomain: "distribuidora-micolucci.firebaseapp.com",
    projectId: "distribuidora-micolucci",
    storageBucket: "distribuidora-micolucci.appspot.com",
    messagingSenderId: "344774362633",
    appId: "1:344774362633:web:302ab8799593ef3db39ad8",
    measurementId: "G-SZ4MJ79K79"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (


    <React.Fragment>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailsContainer/>} />
            
          </Routes>
          <Footer/>

      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;