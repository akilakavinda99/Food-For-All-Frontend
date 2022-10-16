import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { newDonation } from "../../api/donator.api";
import NavBar from "../NavBar";
import DonatorDashboard from "./donatorDashboard";

import LoadingSpinner from "../common/LoadingSpinner";
import { getCookie } from "../common/getCookie";
import Footer from "../Footer";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function CreateDonation() {
  var dtToday = new Date();

  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate() + 1;
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  var minDate = year + "-" + month + "-" + day;

  console.log(minDate);

  const navigate = useNavigate();
  const [donationTitle, setDonationTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [donationDescription, setDonationDescription] = useState("");
  const [donationEndDate, setDonationEndDate] = useState("");

  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(getCookie("uId"));
  }, []);

  let filesarr = [];
  const fileUpload = (files) => {
    filesarr = files;
    // console.log(filesarr.base64);
  };

  const createDonation = async (e) => {
    setLoading(true);
    e.preventDefault();
    const donationImage = filesarr.base64;
    console.log(donationImage);
    const userID = userId;

    const donation = {
      userID,
      donationTitle,
      email,
      location,
      donationEndDate,
      contactNumber,
      donationImage,
      donationDescription,
    };
    console.log(donation);
    await newDonation(donation)
      .then((res) => {
        setLoading(false);
        swal("Donation Succesfully Created", "", "success").then((value) => {
          if (value) {
            navigate("../dashboard");
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
      <NavBar />
      {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            bottom: 0,
            left: 0,
            right: 0,

            margin: "auto",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : (
        <div
          class="container my-auto"
          style={{ paddingTop: 30, marginBottom: 100 }}
        >
          <div class="row">
            <div class="mx-auto">
              <div class="card z-index-0 fadeIn3 fadeInBottom">
                <div class="card-body">
                  <form
                    role="form"
                    class="text-start"
                    onSubmit={createDonation}
                  >
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
                        maxLength={35}
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
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
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
                        pattern="[0]{1}[0-9]{9}"
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
                        min={minDate}
                        max="2025-05-20"
                        id="datefield"
                        onFocus={(e) => (e.target.type = "date")}
                        onChange={(e) => {
                          setDonationEndDate(e.target.value);
                        }}
                      />
                    </div>
                    {/* <div
                      class="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      The donation will be displayed in the homepage until you
                      mark it as completed.
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div> */}
                    {/* <div class="alert alert-warning" role="alert">
                      The donation will be displayed in the homepage until you
                      mark it as completed.
                    </div> */}
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
      )}
      <div
        style={{
          marginTop: 100,
        }}
      >
        <Footer />
      </div>
    </>
  );
}
