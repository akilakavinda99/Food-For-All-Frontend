import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Img1 from "./image-1.jpg"
import Img2 from "./image-2.jpg"
import Img3 from "./image-3.jpg"
import "../App.css"

export default function HomePage() {
  return (
    <div>
        <nav>
            <NavBar />
        </nav>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={Img1} class="img-1 d-block w-100 hd-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h1 className='welcome-image-heading'>HELP  WITH  HUNGER <br />  BY  <br />  DONATING TODAY</h1>
                <h4 className='text-muted'>" If you cannot feed a hundred people, Then feed just one "</h4>
            </div>
            </div>
            <div class="carousel-item">
            <img src={Img2} class="d-block w-100 hd-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h1 className='welcome-image-heading'>THE  GREATEST GOOD <br /> IS WHAT WE DO <br /> FOR ONE ANOTHER</h1>
                <h4 className='text-muted'>" You have two hands. One to help yourself, the second to help others "</h4>
            </div>
            </div>
            <div class="carousel-item">
            <img src={Img3} class="d-block w-100 hd-image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h1 className='welcome-image-heading'>NO ONE HAS EVER <br /> BECOME POOR <br/> FROM GIVING </h1> 
                <h4 className='text-muted'>" All we need is to build human relations with our deeds. That's only thing that lasts forever "</h4>
            </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>

        <div className='container mt-5'>
            <h4 className='d-flex justify-content-center'>FEATURED EVENTS</h4>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}
