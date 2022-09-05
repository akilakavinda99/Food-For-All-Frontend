import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'


export default function requesterProfile() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <h4 className="pt-3 ms-4">Account settings</h4>
      <hr/>
    <div class="container-signup d-flex justify-content-center pt-4 pb-5">
        <form class="form-control form-profile m-3">

        <div class="row pt-5"> 
              <div class="d-flex justify-content-center ps-5 ms-2"> 
                <h1 class=" btn btn-secondary btn-lg rounded-circle"><i class="bi bi-person-plus-fill"></i></h1>
              </div> 
        </div>
        <p class="h6 text-center ms-5 pt-3 mb-5">Add a profile picture</p> 

          <div class="row m-auto">
            <div class="col ms-2 pe-5 border-end">
                <div class="row">
                    <div class="col">
                        <div class="mb-4">
                            <label for="formFile" class="form-label">First name</label> 
                            <input type="text" class="form-control"/> 
                        </div> 
                    </div>
                    <div class="col">
                        <div class="mb-4"> 
                            <label for="formFile" class="form-label">Last name</label>
                            <input type="text" class="form-control"/> 
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="formFile" class="form-label">Telephone number</label>
                    <input type="text" class="form-control"/> 
                </div>

                <div class="mb-4"> 
                    <label for="formFile" class="form-label">Email Address</label>
                    <input type="email" class="form-control"/> 
                </div>

            </div>

            <div class="col align-self-end ">
            <div class="mb-4 ms-5">
                <label for="formFile" class="form-label">Current Password</label>
                <input type="password" class="form-control"/> 
            </div> 
            <div class="mb-4 ms-5"> 
                <label for="formFile" class="form-label">New Password</label>
                <input type="password" placeholder="New password" class="form-control"/> 
            </div> 
            <div class="mb-4 ms-5"> 
                <label for="formFile" class="form-label">Confirm Password</label>
                <input type="password" placeholder="Confirm password" class="form-control"/> 
            </div> 
            </div>
        </div>
            <div class="row pt-5"> 
              <div class="mb-4 d-flex justify-content-center ps-5 ms-2"> 
                <div class="btn btn-primary d-block px-5"> Save changes </div> 
              </div> 
           </div>
        </form>
      </div>

  <footer>
    <Footer />
  </footer>
  </div>
  )
}
