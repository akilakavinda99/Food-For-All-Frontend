import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { getPendingDonations } from "../../../api/donator.api";
import { getCookie } from "../../common/getCookie";
import LoadingSpinner from "../../common/LoadingSpinner";
import NavButton from "../../NavButton";
import NoItems from "../noItems";
import SideNav from "../sideNav";
import PendingDonationCard from "./pendingDonationCard";

export default function PendingDonationView() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(getCookie("uId"));
    // setLoading(true);
    //fetching all inbound item data from the database
  }, [userId]);
  console.log(userId);

  useEffect(() => {
    setLoading(true);

    getPendingDonations(userId)
      .then((res) => {
        setLoading(false);

        console.log(res);
        if (res.data.length > 0) {
          setLoading(false);
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
      <SideNav pending="true" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavButton />
        <div className="container-fluid py-4" onClick={toggleSidenav}>
          <div className="row align-items-center">
            <>
              <h3
                style={{
                  textAlign: "center",
                }}
              >
                Pending Donations
              </h3>
            </>
            {loading ? (
              <div
                style={{
                  marginTop: 250,
                }}
              >
                <LoadingSpinner />
              </div>
            ) : donations.length == 0 ? (
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
                      <PendingDonationCard
                        donationTitle={f.donationTitle}
                        donationDescribe={f.donationDescription}
                        _id={f._id}
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
