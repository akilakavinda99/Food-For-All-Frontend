import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Img1 from "./image-1.jpg"
import Img2 from "./image-2.jpg"
import Img3 from "./image-3.jpg"
import Img4 from "./image-4.jpg"
import Img5 from "./image-5.jpg"
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
            <h4 className='d-flex justify-content-center mb-4'>ABOUT FOOD BANK</h4>

            <div className='row mb-5'>
                <div className='col-5'>
                    <img className="img-about" src={Img4} />
                </div>

                <div className='col-7'>
                    <h6>A food bank is a non-profit, 
                        charitable organization that distributes food to those who have difficulty purchasing enough to avoid hunger, 
                        usually through intermediaries like food pantries and soup kitchens.
                         Some food banks distribute food directly with their own food pantries.<br /><br />
                         The rise of food banks has been broadly welcomed. Not only do they provide a solution to the problem of hunger that does not require resources from the state,
                          but they can be viewed as evidence of increasing community spirit and of active, caring citizenship. In the UK for example, Patrick Butler, society editor for The Guardian,
                           has written that the rise of foodbanks has been most enthusiastically welcomed by the right,
                          but also by many on the left of the political spectrum, who were often "nervously excited" about them."Many feel they are firefighting, 
                          finding a way to deal with the logistics of feeding more and more people,
                           with no time to advocate for changes that would eradicate the need for food banks in the first place."
                         
                    </h6>
                </div>

            </div>

            <h4 className='d-flex justify-content-center mb-4'>About Volunteer Contribution</h4>
            <div className='row mt-2'>
                <div className='col-7'>
                    <h6 className='mt-5'>

                    We recognize the limitations of directing a project from a distance. That’s why at each step we collaborate with local partners,
                     from school leadership, to local NGOs, to the students themselves. <br /> <br />
                      Each year,
                      we award scholarships through a collaborative process between the Agua Blanca school and the Chaco Fund’s Board. 
                      We communicate with the scholars to track their progress and provide ongoing support. Our aim is to create a holistic professional development program for scholars, 
                      not just pay for room and board. We know that in Bolivia, just as in US and around the world, first-generation college students face unique challenges.
                     The Fund is dedicated to ensuring the self-defined success of these young scholars both inside and outside of the classroom.
                         
                    </h6>
                </div>
                <div className='col-5'>
                    <img className="img-about" src={Img5} />
                </div>


            </div>

        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}
