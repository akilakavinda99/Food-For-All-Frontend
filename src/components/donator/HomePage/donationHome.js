import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  getAllDonations,
  markDonationAsCompleted,
} from "../../../api/donator.api";
import { getCookie } from "../../common/getCookie";
import LoadingSpinner from "../../common/LoadingSpinner";
import Footer from "../../Footer";
import NavBar from "../../NavBar";
import DonationDescription from "../DonationView/DonationViewComponents/DonationDescription";
import DonationHomeCard from "./donationHomeCard";

export default function DonationHome() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const markAsCompleted = (id) => {
    // console.log(id);
    if (userId == false) {
      //     swal()
      //
      swal({
        title: "You are not logged in !!",
        text: "Please login to create a donation",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate("../../user/signin");
        }
      });
    } else {
      navigate("../createDonation");
    }
  };
  useEffect(() => {
    setUserId(getCookie("uId"));
  }, []);
  // const create = ()=>{
  //   if(userId==false){
  //     swal()
  //   }
  // }
  const [loading, setLoading] = useState(false);
  const [donation, setDonation] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    //fetching all inbound item data from the database
    getAllDonations()
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.length > 0) {
          setDonation(res.data);
          console.log(res.data);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);
  return (
    <>
      <div class="overflow-hidden" style={{}}>
        <NavBar />
        {loading ? (
          <div
            style={{
              marginTop: 250,
              minHeight: "100vh",
            }}
          >
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div
              className="container"
              style={{
                //   marginLeft: 150,
                overflow: "hidden",
                // position: "fixed"
                // marginTop: 20,
                // marginBottom: 20,
              }}
            >
              <div
                class="d-flex justify-content-around"
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                  overflow: "hidden",
                }}
              >
                {/* <div className="row d-flex my-3 me-3"> */}
                <div className="col-lg-4 col-md-6 col-sm-8">
                  <div className="input-group input-group-outline bg-white">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search here..."
                      aria-label="Search"
                      onChange={(e) => {
                        setsearchTerm(e.target.value);
                      }}
                    />{" "}
                  </div>
                </div>{" "}
                {/* <div></div>
                <h2>All Donations</h2>
                <div></div> */}
                <button className="btn btn-primary " onClick={markAsCompleted}>
                  Create A Donation
                </button>
              </div>
            </div>

            <div
              class="row row-cols-4"
              style={{
                marginLeft: 20,
                marginRight: 20,
                overflow: "hidden",
              }}
            >
              {donation
                .filter((val) => {
                  // console.log(val == 0);
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.donationTitle
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    val.donationDescription
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return (
                      <>
                        <h2>Nooasa</h2>
                      </>
                    );
                  }
                })
                .map(function (f) {
                  console.log(f);
                  return (
                    <Link to={"/donator/view/" + f._id}>
                      <DonationHomeCard
                        donationImage={f.donationImage}
                        title={f.donationTitle}
                        description={f.donationDescription}
                      />
                      {/* <div
                        class="card"
                        style={{
                          width: "18rem",
                        }}
                      > */}
                      {/* <img
                          class="card-img-top"
                          src={f.donationImage}
                          alt="Card image cap"
                          style={{
                            width: "100%",
                            height: 150,
                          }}
                        />
                        <div class="card-body">
                          <h5 class="card-title">{f.donationTitle}</h5>
                          <div
                            className="para"
                            style={{
                              width: "100%",
                              //   height: 40,
                              display: "inline-block",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                            }}
                          > */}
                      {/* <div
                              class="row"
                              style={{
                                marginBottom: 30,
                                marginTop: 20,
                              }}
                            >
                              <div class="col">
                                <div
                                  className="row"
                                  style={{
                                    paddingLeft: 20,
                                  }}
                                >
                                  <div className="col-1">
                                    <i
                                      className="material-icons opacity-10 "
                                      style={{
                                        color: "green",
                                      }}
                                    >
                                      location_on
                                    </i>
                                  </div>

                                  <div className="col-3">{f.location}</div>
                                </div>
                              </div>
                              <div class="col">
                                <div
                                  className="row"
                                  style={{
                                    paddingLeft: 90,
                                  }}
                                >
                                  <div
                                    className="col-3"
                                    style={{
                                      marginRight: 5,
                                    }}
                                  >
                                    <i
                                      className="material-icons opacity-10 "
                                      style={{
                                        color: "blue",
                                      }}
                                    >
                                      group
                                    </i>
                                  </div>

                                  <div className="col-9">
                                    {f.numberOfRequests} Requests
                                  </div>
                                </div>
                              </div>
                            </div> */}
                      {/* <div class="d-flex justify-content-around">
                              <i
                                className="material-icons opacity-10 "
                                style={{
                                  color: "green",
                                }}
                              >
                                location_on
                              </i>
                              <div>{f.location}</div>
                              <i
                                className="material-icons opacity-10 "
                                style={{
                                  color: "green",
                                }}
                              >
                                location_on
                              </i>
                              <div>{f.numberOfRequests}</div>
                            </div> */}
                      {/* <div>{f.donationDescription}</div> */}
                      {/* <p
              class="card-text"
              style={{
                textOverflow: "ellipsis",
              }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                      {/* </div> */}
                      {/* </div> */}
                      {/* </div> */}
                    </Link>
                  );
                })}
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
}
