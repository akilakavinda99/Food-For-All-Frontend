import React from "react";
import ViewSelectedFund from "../../components/admin/Fund/fundview";
import SideNav from "../../components/admin/Fund/sideNav";
import NavButton from "../../components/admin/orgrequestlist/NavButton";

export default function RequestedOrganizations (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <ViewSelectedFund/>
        </>
    )
}