import React from 'react'

export default function requesterSignUp() {
  return (
    <div class="container-signup d-flex justify-content-center">
    <div class="card">
      <div class="card-body p-5">    
        <form> 
          <p class="h3 fw-bold text-center mb-2">Sign up for start supporting </p>
          <p class="text-center mb-5"> Do you work for an organization? signup here</p> 

            <div class="row"> 
              <div class="col-md-6 mb-4 "> 
                <input class="form-control" type="text" placeholder="First Name"/>
              </div>
              <div class="col-md-6 mb-4 ">
                <input class="form-control" type="text" placeholder="Lirst Name"/>
              </div> 
            </div>
            
            <div class="mb-4"> 
              <input type="email" placeholder="Email address" class="form-control"/> 
            </div> 
            <div class="mb-4"> 
              <input type="text" placeholder="Telephone number" class="form-control"/> 
            </div> 
            <div class="mb-4"> 
              <input type="password" placeholder="Password" class="form-control"/> 
            </div> 
            <div class="mb-4"> 
              <input type="password" placeholder="Confirm Password" class="form-control"/> 
            </div> 
           
           
           <div class="mb-4"> 
              <label for="check" class="d-flex align-items-center justify-content-center "/> 
              <input type="checkbox" id="check"/> 
              <span class="ms-2 textmuted">I agree with the Terms and Conditions and the privacy policy</span> 
           </div> 
          
           <div class="row"> 
              <div class="mb-4 d-flex justify-content-center"> 
                <div class="btn btn-primary d-block "> SIGN UP </div> 
              </div> 
           </div>
           
        </form>
      </div>
    </div>
  </div>
  )
}
