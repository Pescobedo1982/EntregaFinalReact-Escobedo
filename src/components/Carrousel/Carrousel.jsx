import React from 'react';
import './Carrousel.css'
import galpon from '../img/galpon.png';
import Dist from '../img/Dist.jpg';
import dm from '../img/dm.png';


const Rueda = () => {
    return (
    <>
  
    <div class="row justify-content-center">
    <div class="col-sm-4">
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={dm} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={galpon} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Dist} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div></div>
<br/>
<h3>Nuestros productos</h3>
<br/>


    </>

    )
}

export default Rueda
