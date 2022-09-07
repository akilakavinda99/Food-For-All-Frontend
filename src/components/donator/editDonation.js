import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditDonation() {
  const [donationTitle, setDonationTitle] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [donationDescription, setDonationDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    // setIsLoaded(true);
    const fetchUser = async () => {
      await axios
        .get(`http://localhost:8070/donator/getOneDonation/${id}`)
        .then((res) => {
          setDonationTitle(res.data.donation.donationTitle);
          setEmail(res.data.donation.email);
          setContactNumber(res.data.donation.contactNumber);
          setDonationDescription(res.data.donation.donationDescription);

          //   setDonationTitle();
        })
        .catch(() => {
          // history.push(path);
          // swal({
          //   title: "unauthorized",
          //   text: "Please Login First",
          //   icon: "warning",
          // });
        });
    };
    fetchUser();
  }, []);

  const editDonation = async (e) => {
    e.preventDefault();
    const donation = {
      donationTitle,
      email,
      contactNumber,
      donationDescription,
    };
    await axios
      .put(`http://localhost:8070/donator/updateDonation/${id}`, donation)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div class="container my-auto">
        <div class="row">
          <div class="mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-body">
                <form role="form" class="text-start" onSubmit={editDonation}>
                  <div class="d-flex justify-content-center">
                    <h4>Edit Donation</h4>
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
                      value={donationTitle}
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
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Contact Number*"
                      aria-label="Contact Number"
                      aria-describedby="basic-addon1"
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                      value={contactNumber}
                      required
                    />
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
                      value={email}
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
                      value={donationDescription}
                      required
                    ></textarea>
                  </div>
                  <div>Thumbnail Image</div>
                  {/* <FileBase64 onDone={(files) => fileUpload(files)} /> */}

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
