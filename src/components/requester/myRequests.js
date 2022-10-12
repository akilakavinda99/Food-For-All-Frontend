import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import "./footer.css"

export default function MyRequests() {
  return (
    <div>
        <nav>
            <NavBar />
        </nav>
        <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <h4 className="pt-4 ms-4">My Requests</h4>
          </div>
          
          <div className='col-8'>
            <div className='pt-3'>
            <div class="input-group input-group-outline">
              <div class="form-outline">
                <input id="search-input" type="search" class="form-control btn-search" />
                <label class="form-label" for="form1">Search</label>
              </div>
              <button id="search-button" type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
              </button>
            </div>

            </div>
          </div>
          </div>
        <hr className='hr-request-fund mx-4'/>

        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="..." class="card-img" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div className='row'>
                  <div className='col-10'>
                    <h5 class="card-title">Card title</h5>
                  </div>

                  <div className='col-2'>
                  <h6><i className="bi bi-pencil-square ms-5"></i> Edit</h6>
                  </div>

                </div>
                <h6 class="card-title">By</h6>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
