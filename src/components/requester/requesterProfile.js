import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import Footer from '../Footer'
import NavBar from '../NavBar'
import Profile from './profile.png';
import { getCookie } from "../common/getCookie";
import "./footer.css"




export default function RequesterProfile() {

    const params = useParams();
    const [updateData, setUpdateData] = useState(false);
    const [userId, setUserId] = useState();

    useEffect(() => {
      if (params.userId) {
          setUserId(params.userId);
      } else {
          setUserId(getCookie("uId"));
          // console.log(userId);
      }
  }, [userId, params.userId]);

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <h4 className="pt-3 ms-4">Account settings</h4>
      <hr className='hr-request-fund mx-4'/>

    <div className="container d-flex justify-content-center pt-4 pb-5">
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">

        <form className="form-control form-profile m-3">

        <div className="row pt-4"> 
              <div className="d-flex justify-content-center ps-2 ms-2"> 
                {/* <h1 class=" btn btn-secondary btn-lg rounded-circle"><i class="bi bi-person-plus-fill"></i></h1> */}
                <img className='profile-image' src={Profile} />
              </div> 
        </div>

          <div className="row m-auto pt-5">
            <div className="col ms-2 pe-5 border-end">
                <div className="row">
                    <div className="col">

                        <div className="row input-group input-group-outline mb-4">
                            <label for="formFile">First name</label> 
                            <input type="text" 
                                    className="form-control"
                                    /> 
                        </div> 
                    </div>
                    <div className="col">

                        <div className="row input-group input-group-outline mb-4"> 
                            <label for="formFile">Last name</label>
                            <input type="text" 
                                    className="form-control"
                                    /> 
                        </div>
                    </div>
                </div>

                <div className="row input-group input-group-outline mb-4">
                    <label for="formFile">Telephone number</label>
                    <input type="text" 
                            className="form-control"
                            /> 
                </div>

                <div className="row input-group input-group-outline mb-4"> 
                    <label for="formFile" >Email Address</label>
                    <input type="email" 
                            className="form-control"
                            /> 
                </div>

            </div>

            <div className="row input-group input-group-outline col align-self-end me-5">
            <div className="mb-4 ms-5">
                <label for="formFile">Current Password</label>
                <input type="password" 
                        className="form-control"
                        /> 
            </div> 
            <div className="mb-4 ms-5"> 
                <label for="formFile">New Password</label>
                <input type="password" 
                        placeholder="New password" 
                        className="form-control"/> 
            </div> 
            <div className="mb-4 ms-5"> 
                <label for="formFile">Confirm Password</label>
                <input type="password" 
                      placeholder="Confirm password" 
                      className="form-control"/> 
            </div> 
            </div>
        </div>
            <div className="row pt-5"> 

              <div className="mb-4 d-flex justify-content-center"> 
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
