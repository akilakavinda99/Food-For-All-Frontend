import React from "react";
import NavButton from "../../NavButton";
import DashboardCard from "./dashboardCard";
import SideNav from "../sideNav";
import LatestRequestsDisplay from "./latestRequests";
import FundraisingChart from "../../organization/dashboard/FundraisingChart";
import DonationChart from "./donationChart";

export default function ActiveDonations() {
  const toggleSidenav = (e) => {
    e.preventDefault();
    document.body.classList.remove("g-sidenav-pinned");
  };
  return (
    <>
      <SideNav />
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
                  count="10"
                />
              </div>
              <div class="col-4">
                <DashboardCard
                  image="https://i.postimg.cc/T12tg0Sk/ds-4.png"
                  title="Active Donations"
                  count="10"
                />
              </div>
              <div class="col-4">
                {" "}
                <DashboardCard
                  image="https://i.postimg.cc/tCFmYzKx/ds-8.png"
                  title="Rejected Donations"
                  count="10"
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
