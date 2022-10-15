import React from "react";
import SideNav from "../../components/admin/sideNav";
import NavButton from "../../components/admin/orgrequestlist/NavButton";
import AdminReviewOrg from "../../components/admin/orgView/orgReview";

export default function ReviewOrganization (){

    return(
        <>
            <NavButton/>
            <SideNav/>
            <AdminReviewOrg/>
        </>
    )
}