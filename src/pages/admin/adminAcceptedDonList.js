import React from "react";
import SideNav from "../../components/admin/donation/sideNav";
import NavButton from "../../components/admin/donation/NavButton";
import GetRequestedDonations from "../../components/admin/donation/reqDonationList";
import GetAcceptedDonations from "../../components/admin/donation/acceptedDonationList";

export default function AcceptedDonation (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <GetAcceptedDonations/>
        </>
    )
}