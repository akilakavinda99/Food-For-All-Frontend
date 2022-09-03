import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import "../requester/footer.css"

export default function requesterSignIn() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
    <div class="container d-flex justify-content-center pt-5 pb-5">
    
         
        <form class="form-control p-5"> 
          <p class="h3 fw-bold text-center mb-2 pb-4 border-bottom">Sign in </p>

            <div class="mb-4 pt-4"> 
              <input type="email" placeholder="Email Address" class="form-control"/> 
            </div> 
            <div class="mb-4 pt-2"> 
              <input type="password" placeholder="Password" class="form-control"/> 
            </div> 

           <div class="row border-bottom"> 
              <div class="mb-4 d-flex justify-content-center"> 
                <div class="btn btn-primary d-block "> SIGN IN </div> 
              </div> 
           </div>
           <p class="text-center mb-5 pt-2"> Forgot your password?</p> 
           
        </form>
      </div>
  
 
  <footer>
    <Footer />
  </footer>
  </div>
  )
}
