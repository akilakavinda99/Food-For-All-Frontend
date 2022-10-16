import React, { useEffect } from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import Profile from './profile.png';
import swal from "sweetalert";
import "./footer.css"
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';
import { requesterProfile, updatePassword, updateProfile } from '../../api/requester.api';

export default function UpdateProfileDetails() {
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [passData, setPassData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    requesterProfile(userId)
      .then((res) => {
        setUserData(res.data.requester)
        // console.log(res.data)
      })
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault()

    updateProfile(userId, {
      firstName: userData.firstName,
      lastName: userData.lastName,
      contactNumber: userData.contactNumber,
      email: userData.email
    })
      .then((res) => {
        swal("User profile updated succesfully", "", "success").then((value) => {
          if (value) {
            navigate(-1);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlePassword = (e) => {
    e.preventDefault()

    if (passData.npassword === passData.rpassword) {
      updatePassword(userId, {
        password: passData.npassword
      })
        .then((res) => {
          swal("Password updated succesfully", "", "success").then((value) => {
            if (value) {
              navigate(-1);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal("Password does not match", "", "error");
    }
  }

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className='container'>
        <h4 className="pt-3 ms-4">Account settings</h4>
        <hr className='hr-request-fund mx-4' />

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
                            defaultValue={userData.firstName}
                            onChange={(e) => { setUserData({ ...userData, "firstName": e.target.value }) }}
                          />
                        </div>
                      </div>
                      <div class="col">

                        <div class="row input-group input-group-outline mb-4">
                          <label for="formFile">Last name</label>
                          <input type="text"
                            class="form-control"
                            defaultValue={userData.lastName}
                            onChange={(e) => { setUserData({ ...userData, "lastName": e.target.value }) }}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row input-group input-group-outline mb-4">
                      <label for="formFile">Telephone number</label>
                      <input type="text"
                        class="form-control"
                        defaultValue={userData.contactNumber}
                        onChange={(e) => { setUserData({ ...userData, "contactNumber": e.target.value }) }}
                      />
                    </div>

                    <div class="row input-group input-group-outline mb-4">
                      <label for="formFile" >Email Address</label>
                      <input type="email"
                        class="form-control"
                        defaultValue={userData.email}
                        onChange={(e) => { setUserData({ ...userData, "email": e.target.value }) }}
                      />
                    </div>
                    <div class="mb-4 d-flex justify-content-center">
                      <button className="btn btn-success" onClick={handleUpdate}>
                        SAVE CHANGES
                      </button>
                    </div>

                  </div>

                  <div class="row input-group input-group-outline col align-self-start me-5">
                    <div class="mb-4 ms-5">
                      <label for="formFile">New Password</label>
                      <input type="password"
                        placeholder="New password"
                        class="form-control"
                        onChange={(e) => { setPassData({ ...passData, "npassword": e.target.value }) }}
                      />
                    </div>
                    <div class="mb-4 ms-5">
                      <label for="formFile">Confirm Password</label>
                      <input type="password"
                        placeholder="Confirm password"
                        class="form-control"
                        onChange={(e) => { setPassData({ ...passData, "rpassword": e.target.value }) }}
                      />
                    </div>
                    <div class="mb-4 d-flex justify-content-center">
                      <button className="btn btn-success ms-4" onClick={handlePassword}>
                        CHANGE PASSWORD
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row pt-5">


                </div>
              </form>
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
