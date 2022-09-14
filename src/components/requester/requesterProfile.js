import React from 'react';
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import swal from "sweetalert";
import Footer from '../Footer'
import NavBar from '../NavBar'
import Profile from './profile.png';
import "./footer.css"
import { Link } from "react-router-dom";



export default function requesterProfile() {
    // const { id } = useParams();

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
                            <input type="text" 
                                    class="form-control"
                                    defaultValue={"thushal"}
                                    readOnly
                                    /> 
                        </div> 
                    </div>
                    <div class="col">

                        <div class="row input-group input-group-outline mb-4"> 
                            <label for="formFile">Last name</label>
                            <input type="text" 
                                    class="form-control"
                                    defaultValue={"shaminda"}
                                    readOnly
                                    /> 
                        </div>
                    </div>
                </div>

                <div class="row input-group input-group-outline mb-4">
                    <label for="formFile">Telephone number</label>
                    <input type="text" 
                            class="form-control"
                            defaultValue={"0771234567"}
                            readOnly
                            /> 
                </div>

                <div class="row input-group input-group-outline mb-4"> 
                    <label for="formFile" >Email Address</label>
                    <input type="email" 
                            class="form-control"
                            defaultValue={"thushal@gmail.com"}
                            readOnly
                            /> 
                </div>

            </div>

            <div class="row input-group input-group-outline col align-self-end me-5">
            <div class="mb-4 ms-5">
                <label for="formFile">Current Password</label>
                <input type="password" 
                        class="form-control"
                        defaultValue={"123"}
                        readOnly
                        /> 
            </div> 
            <div class="mb-4 ms-5"> 
                <label for="formFile">New Password</label>
                <input type="password" 
                        placeholder="New password" 
                        class="form-control"/> 
            </div> 
            <div class="mb-4 ms-5"> 
                <label for="formFile">Confirm Password</label>
                <input type="password" 
                      placeholder="Confirm password" 
                      class="form-control"/> 
            </div> 
            </div>
        </div>
            <div class="row pt-5"> 

              <div class="mb-4 d-flex justify-content-center"> 
                <Link to="/requester/profile/update/631aa3f99d2dc36d4c12a8f0"><button class="btn btn-primary d-block px-5"> Edit Profile </button></Link>
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
