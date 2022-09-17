import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateDonation from "../components/donator/createDonation";
import DashboardCard from "../components/donator/DashboardComponents/dashboardCard";
import ActiveDonations from "../components/donator/DashboardComponents/activeDonations";
import DonatorCard from "../components/donator/donatorCard";
import DonatorDashboard from "../components/donator/donatorDashboard";
import EditDonation from "../components/donator/editDonation";
import DonationView from "../components/donator/DonationView/donationView";

export default function Donator() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<DonatorCard />} />
        <Route path="/createDonation" element={<CreateDonation />} />
        <Route path="/dashboard" element={<DonatorDashboard />} />
        <Route
          path="/dashboard/donator/editDonation/:id"
          element={<EditDonation />}
        />
        <Route path="/dashboard/card" element={<DashboardCard />} />
        <Route path="/dashboard/active" element={<ActiveDonations />} />
        <Route path="/view" element={<DonationView />} />
      </Routes>
    </>
  );
}
