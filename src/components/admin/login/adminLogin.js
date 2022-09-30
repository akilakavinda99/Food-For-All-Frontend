import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import "./footer.css"
import { Link } from 'react-router-dom';

export default function requesterSignIn() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      
    <div class="container container-signin pt-5 pb-5">
      <div className="card z-index-0 fadeIn3 fadeInBottom ">

         
        <form class="form-control p-5"> 
          <p class="h3 fw-bold text-center mb-2 pb-4 border-bottom">Admin Login </p>


            <div class="input-group input-group-outline mb-4 pt-4"> 
              <input type="email" placeholder="Email Address" class="form-control"/> 
            </div> 
            <div class="input-group input-group-outline mb-4 pt-2"> 

              <input type="password" placeholder="Password" class="form-control"/> 
            </div> 

           <div class="row border-bottom"> 
              <div class="mb-4 d-flex justify-content-center"> 
                <div class="btn btn-primary d-block "><Link to={"/admin/dashboard"}> LOGIN </Link></div> 
              </div> 
           </div>
           
        </form>
        </div>
      </div>
  
 
  <footer>
    <Footer />
  </footer>
  </div>
  )
}
