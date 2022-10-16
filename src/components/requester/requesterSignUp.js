import React from 'react';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Footer from '../Footer';
import NavBar from '../NavBar';

export default function RequesterSignUp() {

  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log("afdaf")

    const signup = {
      firstName,
      lastName,
      email,
      contactNumber,
      password,
    };

    axios.post("http://localhost:8070/requester/requesterSignup", signup).then((res) => {
      swal("Succesfully Signed up", "", "success").then((value) => {
        if (value) {
          navigate("../signin");
        }
      });
    }).catch((err) => {
      console.log(err);
        swal("failed", "Please try again", "error").then(
          (value) => {
            if (value) {
            }
          }
        );
    });
  };

  return (
    <div>
      <nav>
        <NavBar />
      </nav>

    <div class="container d-flex justify-content-center pt-5 pb-5">

      
    <div className="card z-index-0 fadeIn3 fadeInBottom ">
    <div className="card-body">
        <form className="form-control" onSubmit={registerUser}> 
          <p className="h3 fw-bold text-center mb-2 pt-4">Sign up for start supporting </p>
          <p className="text-center mb-5"> Do you work for an organization? <Link to="/organization/new">Signup here</Link></p> 

            <div className="row input-group input-group-outline m-0 px-4"> 
              <div className="col-md-6 mb-4 ps-0"> 
                <input className="form-control" 
                        type="text" 
                        placeholder="First Name" 
                        onChange={(e) => {
                          setFirstName(e.target.value);
                      }}
                      required/>
              </div>
              <div className="col-md-6 mb-4 pe-0">
                <input className="form-control" 
                        type="text" 
                        placeholder="Last Name"
                        onChange={(e) => {
                          setLastName(e.target.value);
                      }}
                      required
                        />
              </div> 
            </div>
            
            <div className="input-group input-group-outline mb-4 px-4"> 
              <input type="email" 
                      placeholder="Email address" 
                      className="form-control"
                      onChange={(e) => {
                        setemail(e.target.value);
                    }}
                    required/> 
            </div> 
            <div className="input-group input-group-outline mb-4 px-4"> 
              <input type="text" 
                      placeholder="Telephone number" 
                      className="form-control"
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                    }}
                    required/> 
            </div> 
            <div className="input-group input-group-outline mb-4 px-4"> 
              <input type="password" 
                      placeholder="Password" 
                      className="form-control"
                      onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required/> 
            </div> 
            {/* <div className="input-group input-group-outline mb-4 px-4"> 
              <input type="password" 
                      placeholder="Confirm Password" 
                      className="form-control"
                      onChange={(e) => {
                        firstName(e.target.value);
                    }}
                    required/> 
            </div>  */}
           
           
           <div className="mb-4 px-4"> 
              <label for="check" className="d-flex align-items-center justify-content-center "/> 
              <input type="checkbox" id="check" required/> 
              <span className="ms-2 textmuted">I agree with the Terms and Conditions and the privacy policy</span> 
           </div> 
          
           <div className="row"> 
              <div className="mb-3 d-flex justify-content-center"> 
               
                  <button type='submit' className="btn btn-primary d-block">
                    SIGN UP
                  </button>
           
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