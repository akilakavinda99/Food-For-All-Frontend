import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { newRequest } from "../../../api/donator.api";
import NavBar from "../../NavBar";

export default function SendRequest() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [donationTitle, setDonationTitle] = useState("");
  const [requesterEmail, setEmail] = useState("");
  const [requesterName, setName] = useState("");

  const [requesterContact, setContactNumber] = useState("");
  const [requestDescription, setRequestDescription] = useState("");

  let filesarr = [];
  const fileUpload = (files) => {
    filesarr = files;
    // console.log(filesarr.base64);
  };

  const createDonation = (e) => {
    e.preventDefault();
    // const donationImage = filesarr.base64;
    // console.log(donationImage);
    const userID = 123;
    const donationID = id;

    const request = {
      donationID,
      requesterName,
      requesterEmail,
      requesterContact,
      requestDescription,
    };
    newRequest(request)
      .then((res) => {
        swal("Request successfully sent", "", "success").then((value) => {
          if (value) {
            navigate(-1);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        swal("Request sending failed", "Please try again", "error").then(
          (value) => {
            if (value) {
              navigate("../dashboard");
            }
          }
        );
      });
  };
  return (
    <>
      {/* <span class="mask bg-gradient-dark opacity-6"></span> */}
      <NavBar />
      <div class="container my-auto" style={{ paddingTop: 30 }}>
        <div class="row">
          <div class="mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-body">
                <form role="form" class="text-start" onSubmit={createDonation}>
                  <div class="d-flex justify-content-center">
                    <h4>Send a Request</h4>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div></div>
                    <div></div>
                    <h6>* Required Fields</h6>
                  </div>

                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name*"
                      aria-label="Donation Title"
                      aria-describedby="basic-addon1"
                      pattern="[a-z A-Z]*"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    <input
                      type="text"
                      placeholder="Contact Number*"
                      aria-label="Contact Number"
                      aria-describedby="basic-addon1"
                      title="Error Message"
                      pattern="[0]{1}[0-9]{9}"
                      class="form-control"
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                      required
                    />
                    {/* <input type="text" name="country_code"></input> */}
                  </div>
                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email*"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Description about the request*"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      pattern="[a-z A-Z]*"
                      onChange={(e) => {
                        setRequestDescription(e.target.value);
                      }}
                      required
                    ></textarea>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-secondary">
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
