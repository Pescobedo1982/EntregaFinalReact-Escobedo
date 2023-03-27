import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import  Main  from './Containers/Main';
import Footer from './footer/Footer.jsx';
import Rueda from '../Carrousel/Carrousel';


function Landings() {
    return (
        <>
        <Navbar />
        <Rueda/>
        <Main/>
        <Footer/>
        
        
        </>
    );
}

export default Landings;