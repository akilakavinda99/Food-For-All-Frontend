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
      <p className='text-dark font-weight-normal fw-bold mx-4'>Millions of children are dying every day from hunger and diseases that are made worse by undernutrition. 
      No child should ever go hungry or suffer from preventable sickness and disease because their basic nutritional needs go unmet. The statistics are discouraging, 
      but Feed God’s Hungry Children knows that even the smallest gift of compassion can change lives one child at a time.</p>
      <hr className='hr-request-fund mx-4'/>

    <div class="container d-flex justify-content-center pt-4 pb-5">
      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form class="form-control"> 
          <p class="h3 fw-bold text-center mb-2 pt-4"> Let's make a request </p>
          
          <p class="text-center d-flex ms-3 pt-3 text-muted fw-bold "> Requester's psersonal information </p> 

            <div class="row input-group input-group-outline m-0 px-4"> 
              <div class="col-md-6 mb-4 ps-0"> 
                <input class="form-control" type="text"/>
              </div>
              <div class="col-md-6 mb-4 pe-0">
                <input class="form-control" type="text"/>
              </div> 
            </div>

            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="text" placeholder="Telephone number" class="form-control"/> 
            </div> 

            <p class="text-center d-flex ms-3 text-muted fw-bold "> Benificiary's contact information </p> 

            <div class="row input-group input-group-outline m-0 px-4"> 
              <div class="col-md-6 mb-4 ps-0"> 
                <input class="form-control" type="text" placeholder="Country"/>
              </div>
              <div class="col-md-6 mb-4 pe-0">
                <input class="form-control" type="text" placeholder="Zip code"/>
              </div> 
            </div>

            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="text" placeholder="Address" class="form-control"/> 
            </div> 
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="email" placeholder="Email Address" class="form-control"/> 
            </div> 
            <div class="input-group input-group-outline mb-4 px-4"> 
              <input type="text" placeholder="Telephone number" class="form-control"/> 
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
