import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateDonation from "../components/donator/createDonation";
import DashboardCard from "../components/donator/DashboardComponents/dashboardCard";
import ActiveDonations from "../components/donator/DashboardComponents/activeDonations";
import DonatorCard from "../components/donator/donatorCard";
import DonatorDashboard from "../components/donator/donatorDashboard";
import EditDonation from "../components/donator/editDonation";
import DonationView from "../components/donator/DonationView/donationView";
import SeeRequests from "../components/donator/SeeRequests/seeRequests";
import SendRequest from "../components/donator/SendRequest/sendRequest";
import PendingDonationView from "../components/donator/PendingDonations/pendingDonationView";
import RejectedDonationView from "../components/donator/RejectedDonations/rejectedDonationView";
import AcceptedRequestView from "../components/donator/AcceptedRequests/acceptedRequestsView";
import DonationHome from "../components/donator/HomePage/donationHome";

export default function Donator() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<DonatorCard />} />
        <Route path="/createDonation" element={<CreateDonation />} />
        <Route path="/myDonations" element={<DonatorDashboard />} />
        <Route
          path="/dashboard/donator/editDonation/:id"
          element={<EditDonation />}
        />
        <Route path="/dashboard/card" element={<DashboardCard />} />
        <Route path="/dashboard" element={<ActiveDonations />} />
        <Route path="/view/:id" element={<DonationView />} />
        <Route path="/viewRequest/:id" element={<SeeRequests />} />
        <Route path="/sendRequest/:id" element={<SendRequest />} />
        <Route path="/pendingDonations" element={<PendingDonationView />} />
        <Route path="/rejectedDonations" element={<RejectedDonationView />} />
        <Route path="/acceptedRequests" element={<AcceptedRequestView />} />
        <Route path="/home" element={<DonationHome />} />
      </Routes>
    </>
  );
}
