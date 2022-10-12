import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

export default function ViewRequest() {
  return (
      <div>
        <nav>
          <NavBar />
        </nav>

        <div className="container mt-4 mb-4">
          <h3>Request Title</h3>
          <div className="row">
            <div className="col-8">
            <div class="card-deck">
              <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                  <div className='row border-bottom'>
                    <h5 class="text-normal"><i class="bi bi-person-circle"></i> Thushal Shaminda is organizing this fund request.</h5>
                  </div>
                  <div className='row border-bottom'>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="button" class="btn btn-outline-danger">Remove Fund Request</button>
            </div>
            </div>
            <div className="col-4">
            <div class="card">
              <div class="card-body">
                <div className='row border-bottom'>
                  <h5 class="card-title"><center>Beneficiary's contact information</center></h5>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-person-circle"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2'>first name and last name</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-geo-alt-fill"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2 text-muted'>address</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-phone-fill"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2 text-muted'>telephone</h6>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-2 ms-2'>
                    <h3><i class="bi bi-envelope-open-fill"></i></h3>
                  </div>
                  <div className='col-9 ps-0'>
                    <h6 className='pt-2 text-muted'>email</h6>
                  </div>
                </div>

                <div className='row border-top'>
                  <h6 class="card-text"><center>Share your fund request on social networks</center></h6>            
                </div>

              <div class="d-flex justify-content-center">
                <h3><i class="bi bi-facebook me-4"></i></h3>
                <h3><i class="bi bi-twitter me-4"></i></h3>
                <h3><i class="bi bi-instagram me-4"></i></h3>
                <h3><i class="bi bi-whatsapp"></i></h3>
              </div>
                
              </div>
            </div>
            </div>
        </div>

      
      </div>
        <footer>
          <Footer />
        </footer>
      </div>
  )
}
