import React from "react";
import SideNav from "../sideNav";
import PendingDonationCard from "./pendingDonationCard";

export default function PendingDonationView() {
  return (
    <div>
      <SideNav />
      <PendingDonationCard
        donationTitle="sdsd"
        donationDescribe="dsdsd"
        _id="223"
      />
    </div>
  );
}
