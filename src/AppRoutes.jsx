import React from 'react';
import {Routes, Route} from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/Navbar/Carrito';


const AppRoutes = () => {
    return (
    <Routes>

        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route exact path="/Navbar" element={<Carrito/>} />

    </Routes>
    )
}

export default AppRoutes