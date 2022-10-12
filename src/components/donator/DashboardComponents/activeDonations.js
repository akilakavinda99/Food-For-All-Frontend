import React, { useEffect, useState } from "react";
import NavButton from "../../NavButton";
import DashboardCard from "./dashboardCard";
import SideNav from "../sideNav";
import LatestRequestsDisplay from "./latestRequests";
import FundraisingChart from "../../organization/dashboard/FundraisingChart";
import DonationChart from "./donationChart";
import {
  getOngoingDonations,
  getPendingDonations,
  getRejectedDonations,
} from "../../../api/donator.api";
import { getCookie } from "../../common/getCookie";

export default function ActiveDonations() {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(getCookie("uId"));
    // setLoading(true);
    //fetching all inbound item data from the database
  }, [userId]);

  const [rejectedDonations, setRejected] = useState([]);
  const [pendingDonations, setPending] = useState([]);
  const [activeDonations, setActive] = useState([]);

  useEffect(() => {
    //fetching all inbound item data from the database
    getPendingDonations(userId)
      .then((res) => {
        if (res.data.length > 0) {
          setPending(res.data);
          console.log(res.data);
          // console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
        // console.log(donations);
      });
  }, [userId]);
  useEffect(() => {
    //fetching all inbound item data from the database
    getOngoingDonations(userId)
      .then((res) => {
        if (res.data.length > 0) {
          setActive(res.data);
          console.log(res.data);
          // console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
        // console.log(donations);
      });
  }, [userId]);
  useEffect(() => {
    //fetching all inbound item data from the database
    getRejectedDonations(userId)
      .then((res) => {
        if (res.data.length > 0) {
          setRejected(res.data);
          console.log(res.data);
          // console.log(donations);
        }
      })
      .catch((e) => {
        console.log(e);
        // console.log(donations);
      });
  }, [userId]);

  const toggleSidenav = (e) => {
    e.preventDefault();
    document.body.classList.remove("g-sidenav-pinned");
  };
  return (
    <>
      <SideNav dashboard="true" />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavButton />
        <div className="container-fluid py-4" onClick={toggleSidenav}>
          <div className="row align-items-center"></div>
          <div class="container" style={{ paddingTop: 20 }}>
            <div class="row">
              <div class="col-4">
                <DashboardCard
                  image="https://i.postimg.cc/5t0vBGNQ/ds-5.png"
                  title="Pending Donations"
                  count={pendingDonations.length}
                />
              </div>
              <div class="col-4">
                <DashboardCard
                  image="https://i.postimg.cc/T12tg0Sk/ds-4.png"
                  title="Active Donations"
                  count={activeDonations.length}
                />
              </div>
              <div class="col-4">
                {" "}
                <DashboardCard
                  image="https://i.postimg.cc/tCFmYzKx/ds-8.png"
                  title="Rejected Donations"
                  count={rejectedDonations.length}
                />
              </div>
            </div>
            <div className="row">
              <div class="col-2">
                {" "}
                <LatestRequestsDisplay />
              </div>
              <div class="col-2" style={{ paddingLeft: 550, paddingTop: 20 }}>
                {" "}
                <DonationChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
