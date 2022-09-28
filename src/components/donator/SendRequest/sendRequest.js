import React from "react";

export default function SendRequest() {
  return (
    <>
      {/* <span class="mask bg-gradient-dark opacity-6"></span> */}
      <NavBar />
      <div class="container my-auto" style={{ paddingTop: 30 }}>
        <div class="row">
          <div class="mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-body">
                <form
                  role="form"
                  class="text-start"
                  // onSubmit={createDonation}
                >
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
                      onChange={(e) => {
                        setDonationTitle(e.target.value);
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
