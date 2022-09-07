import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

export default function RequesterSignUp() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

    <div class="container d-flex justify-content-center pt-5 pb-5">

      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form class="form-control"> 
          <p class="h3 fw-bold text-center mb-2 pt-4">Sign up for start supporting </p>
          <p class="text-center mb-5"> Do you work for an organization? signup here</p> 

            <div class="row input-group input-group-outline m-0 px-4"> 
              <div class="col-md-6 mb-4 ps-0"> 
                <input class="form-control" type="text" placeholder="First Name"/>
              </div>
              <div class="col-md-6 mb-4 pe-0">
                <input class="form-control" type="text" placeholder="Lirst Name"/>
              </div> 
            </div>
            
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="email" placeholder="Email address" class="form-control"/> 
            </div> 
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="text" placeholder="Telephone number" class="form-control"/> 
            </div> 
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="password" placeholder="Password" class="form-control"/> 
            </div> 
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="password" placeholder="Confirm Password" class="form-control"/> 
            </div> 
           
           
           <div class="mb-4 px-4"> 
              <label for="check" class="d-flex align-items-center justify-content-center "/> 
              <input type="checkbox" id="check"/> 
              <span class="ms-2 textmuted">I agree with the Terms and Conditions and the privacy policy</span> 
           </div> 
          
           <div class="row"> 
              <div class="mb-3 d-flex justify-content-center"> 
                <div class="btn btn-primary d-block "> SIGN UP </div> 
              </div> 
           </div>
           
        </form>
        </div>
      </div>
      </div>

  <footer>
    <Footer />
  </footer>
  </div>
  )
}
