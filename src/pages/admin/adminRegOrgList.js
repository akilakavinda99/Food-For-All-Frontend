import React from "react";
import SideNav from "../../components/admin/orgrequestlist/sideNav";
import ApprovedOrg from "../../components/admin/registeredOrganizationList";
import NavButton from "../../components/admin/orgrequestlist/NavButton";

export default function RequestedOrganizations (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <ApprovedOrg/>
        </>
    )
}