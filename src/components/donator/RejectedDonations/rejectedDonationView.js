import axios from "axios";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { getRejectedDonations } from "../../../api/donator.api";
import { getCookie } from "../../common/getCookie";
import NavButton from "../../NavButton";
import NoItems from "../noItems";
import SideNav from "../sideNav";
import RejectedDonationsCard from "./rejectedDonationsCard";

export default function RejectedDonationView() {
  const [donations, setDonations] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(getCookie("uId"));
    // setLoading(true);
    //fetching all inbound item data from the database
  }, [userId]);
  console.log(userId);

  useEffect(() => {
    //fetching all inbound item data from the database
    getRejectedDonations(userId)
      .then((res) => {
        console.log(res);
        if (res.data.length > 0) {
          setDonations(res.data);
          console.log(res.data);
          //   console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userId]);
  const toggleSidenav = (e) => {
    e.preventDefault();
    document.body.classList.remove("g-sidenav-pinned");
  };
  return (
    <div>
      <SideNav rejected="true" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavButton />
        <div className="container-fluid py-4" onClick={toggleSidenav}>
          <div className="row align-items-center">
            {donations.length == 0 ? (
              <NoItems />
            ) : (
              <>
                <h3>Pending Donations</h3>
                <div
                  class="row row-cols-2"
                  style={{
                    // marginLeft: 150,
                    overflow: "hidden",
                  }}
                >
                  {donations.map(function (f) {
                    return (
                      <div class="col">
                        <RejectedDonationsCard
                          donationTitle="sdsd"
                          donationDescribe="dsdsd"
                          _id="223"
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
