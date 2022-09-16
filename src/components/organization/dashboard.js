import React from "react";
import NavButton from "../NavButton";
import FundraisingChart from "./dashboard/FundraisingChart";
import LatestContributions from "./dashboard/LatestContributions";
import DashboardSummary from "./dashboard/DashboardSummary";

export default function Dashboard() {

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };

    return (
        <>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavButton page="Dashboard" path="Organization" />
                <div className="container-fluid py-4 " onClick={toggleSidenav}>
                    <DashboardSummary />
                    <hr className="dark horizontal my-3" />
                    <div className="row mt-3">
                        <div className="col-lg-4 col-md-6 my-4">
                            <LatestContributions />
                        </div>
                        <div className="col-lg-8 col-md-6 my-4">
                            <FundraisingChart />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}