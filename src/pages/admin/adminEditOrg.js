import React from "react";
import SideNav from "../../components/admin/sideNav";
import OrgView from "../../components/admin/orgView/orgView"
import NavButton from "../../components/admin/orgrequestlist/NavButton";

export default function RequestedOrganizations (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <OrgView/>
        </>
    )
}