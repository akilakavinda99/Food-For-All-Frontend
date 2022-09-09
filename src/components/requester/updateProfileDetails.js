import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import Profile from './profile.png';
import "./footer.css"

export default function updateProfileDetails() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <h4 className="pt-3 ms-4">Account settings</h4>
      <hr className='hr-request-fund mx-4'/>

    <div class="container d-flex justify-content-center pt-4 pb-5">
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">

        <form class="form-control form-profile m-3">

        <div class="row pt-4"> 
              <div class="d-flex justify-content-center ps-2 ms-2"> 
                {/* <h1 class=" btn btn-secondary btn-lg rounded-circle"><i class="bi bi-person-plus-fill"></i></h1> */}
                <img className='profile-image' src={Profile} />
              </div> 
        </div>

          <div class="row m-auto pt-5">
            <div class="col ms-2 pe-5 border-end">
                <div class="row">
                    <div class="col">

                        <div class="row input-group input-group-outline mb-4">
                            <label for="formFile">First name</label> 
                            <input type="text" class="form-control"/> 
                        </div> 
                    </div>
                    <div class="col">

                        <div class="row input-group input-group-outline mb-4"> 
                            <label for="formFile">Last name</label>
                            <input type="text" class="form-control"/> 
                        </div>
                    </div>
                </div>

                <div class="row input-group input-group-outline mb-4">
                    <label for="formFile">Telephone number</label>
                    <input type="text" class="form-control"/> 
                </div>

                <div class="row input-group input-group-outline mb-4"> 
                    <label for="formFile" >Email Address</label>
                    <input type="email" class="form-control"/> 
                </div>

            </div>

            <div class="row input-group input-group-outline col align-self-end me-5">
            <div class="mb-4 ms-5">
                <label for="formFile">Current Password</label>
                <input type="password" class="form-control"/> 
            </div> 
            <div class="mb-4 ms-5"> 
                <label for="formFile">New Password</label>
                <input type="password" placeholder="New password" class="form-control"/> 
            </div> 
            <div class="mb-4 ms-5"> 
                <label for="formFile">Confirm Password</label>
                <input type="password" placeholder="Confirm password" class="form-control"/> 
            </div> 
            </div>
        </div>
            <div class="row pt-5"> 

              <div class="mb-4 d-flex justify-content-center"> 

                <div class="btn btn-primary d-block px-5"> Save Changes </div> 
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
