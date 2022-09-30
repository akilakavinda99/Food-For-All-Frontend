import React, { useEffect, useState } from "react";
import { getRejectedDonations } from "../../../api/donator.api";
import NavButton from "../../NavButton";
import NoItems from "../noItems";
import SideNav from "../sideNav";
import RejectedDonationsCard from "./rejectedDonationsCard";

export default function RejectedDonationView() {
  const [donations, setDonations] = useState([]);
  const id = 123;
  useEffect(() => {
    //fetching all inbound item data from the database
    getRejectedDonations(id)
      .then((res) => {
        if (res.data.length > 0) {
          setDonations(res.data);
          console.log(res.data);
          //   console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const toggleSidenav = (e) => {
    e.preventDefault();
    document.body.classList.remove("g-sidenav-pinned");
  };
  return (
    <div>
      <SideNav pending="true" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavButton />
        <div className="container-fluid py-4" onClick={toggleSidenav}>
          <div className="row align-items-center">
            {donations.length == 0 ? (
              <NoItems />
            ) : (
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
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
