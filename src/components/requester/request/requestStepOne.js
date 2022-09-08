import React from 'react'
import Footer from '../../Footer'
import NavBar from '../../NavBar'

export default function requestStepOne() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>

      <h4 className="pt-3 ms-4">Request Funds</h4>
      <p className='pt-3 ms-4'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
      <hr/>

    <div class="container d-flex justify-content-center pt-4 pb-5">
      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form class="form-control"> 
          <p class="h3 fw-bold text-center mb-2 pt-4"> Let's make a request </p>
          
          <p class="text-center d-flex ms-3 pt-3 text-muted fw-bold "> Requester's psersonal information </p> 

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

            <p class="text-center d-flex ms-3 text-muted fw-bold "> Benificiary's contact information </p> 

            <div class="row input-group input-group-outline m-0 px-4"> 
              <div class="col-md-6 mb-4 ps-0"> 
                <input class="form-control" type="text" placeholder="First Name"/>
              </div>
              <div class="col-md-6 mb-4 pe-0">
                <input class="form-control" type="text" placeholder="Lirst Name"/>
              </div> 
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
          
           <div class="row"> 
              <div class="mb-3 d-flex justify-content-center"> 
                <div class="btn btn-primary d-block "> NEXT </div> 
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
