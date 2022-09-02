import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateDonation from "../components/donator/createDonation";
import DonatorCard from "../components/donator/donatorCard";
import DonatorDashboard from "../components/donator/donatorDashboard";

export default function Donator() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<DonatorCard />} />
        <Route path="/createDonation" element={<CreateDonation />} />
        <Route path="/dashboard" element={<DonatorDashboard />} />
      </Routes>
    </>
  );
}
