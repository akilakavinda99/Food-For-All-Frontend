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
      <NavBar />
      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <div
            className="container"
            style={{
              //   marginLeft: 150,
              overflow: "hidden",
            }}
          >
            <div
              class="d-flex justify-content-between"
              style={{
                marginTop: 20,
                marginBottom: 10,
                overflow: "hidden",
              }}
            >
              {" "}
              <div></div>
              <h2>All Donations</h2>
              <button className="btn btn-primary" onClick={markAsCompleted}>
                Create A Donation
              </button>
            </div>
          </div>

          <div
            class="row row-cols-4"
            style={{
              marginLeft: 70,
              overflow: "hidden",
            }}
          >
            {donation.map(function (f) {
              return (
                <div class="col">
                  <div
                    style={{
                      marginLeft: 10,
                      marginTop: 10,
                    }}
                  >
                    <Link to={"/donator/view/" + f._id}>
                      <div
                        class="card"
                        style={{
                          width: "18rem",
                        }}
                      >
                        <img
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
                          >
                            <div>{f.donationDescription}</div>
                            {/* <p
              class="card-text"
              style={{
                textOverflow: "ellipsis",
              }}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      <Footer />
    </>
  );
}
