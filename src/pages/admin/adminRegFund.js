import React from "react";
import SideNav from "../../components/admin/Fund/sideNav";
import ApprovedFund from "../../components/admin/approvedFundraiserList";
import NavButton from "../../components/admin/Fund/NavButton";

export default function RequestedOrganizations (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <ApprovedFund/>
        </>
    )
}