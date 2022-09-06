import axios from "axios";
import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import DonatorDashboard from "./donatorDashboard";

export default function CreateDonation() {
  const navigate = useNavigate();
  const [donationTitle, setDonationTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [donationDescription, setDonationDescription] = useState("");

  let filesarr = [];
  const fileUpload = (files) => {
    filesarr = files;
    // console.log(filesarr.base64);
  };

  const createDonation = (e) => {
    e.preventDefault();
    const donationImage = filesarr.base64;
    console.log(donationImage);
    const userID = 123;

    const donation = {
      userID,
      donationTitle,
      email,
      contactNumber,
      donationImage,
      donationDescription,
    };

    axios
      .post("http://localhost:8070/donator/createDonation", donation)
      .then((res) => {
        swal("Donation Succesfully Created", "", "success").then((value) => {
          if (value) {
          }
        });
      })
      .catch((err) => {
        console.log(err);
        swal("Donation creation failed", "Please try again", "error").then(
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
      <div class="container my-auto" style={{ paddingTop: 30 }}>
        <div class="row">
          <div class="mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-body">
                <form role="form" class="text-start" onSubmit={createDonation}>
                  <div class="d-flex justify-content-center">
                    <h4>Create Your Donation</h4>
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
                      placeholder="Donation Title*"
                      aria-label="Donation Title"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setDonationTitle(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Location*"
                      aria-label="Location"
                      aria-describedby="basic-addon1"
                      // onChange={(e) => {
                      //   setLocation(e.target.value);
                      // }}
                      required
                    />
                  </div>
                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    {/* <input
                      type="number"
                      class="form-control"
                      placeholder="Contact Number*"
                      aria-label="Contact Number"
                      aria-describedby="basic-addon1"
                      maxlength="10"
                      pattern="\d{10}"
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                      required
                    /> */}
                    <input
                      type="text"
                      placeholder="Contact Number*"
                      aria-label="Contact Number"
                      aria-describedby="basic-addon1"
                      title="Error Message"
                      pattern="[1-9]{1}[0-9]{9}"
                      class="form-control"
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
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
                    <input
                      placeholder="Donation End Date"
                      class="form-control"
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      // onChange={(e) => {
                      //   setDonationEndDate(e.target.value);
                      // }}
                      id="date"
                    />
                  </div>
                  <div class="input-group mb-3 input-group input-group-outline mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Description about the donation*"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) => {
                        setDonationDescription(e.target.value);
                      }}
                      required
                    ></textarea>
                  </div>
                  <div>Thumbnail Image</div>
                  <FileBase64 onDone={(files) => fileUpload(files)} />

                  <div class="text-center">
                    <button type="submit" class="btn btn-secondary">
                      Create Donation
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
