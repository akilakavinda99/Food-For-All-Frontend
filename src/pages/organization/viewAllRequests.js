import React from "react";
import { getCookie } from "../../components/common/getCookie";
import Unauthorized from "../../components/common/unauthorized";
// import Dashboard from "../../components/organization/dashboard";
import SideNav from "../../components/organization/sideNav";

export default function viewAllRequests() {
    return (
        <>
            {
                getCookie("uId") && getCookie("access_token") && getCookie("roles") && getCookie("roles") === "5150" ? (
                    <>
                        <SideNav requests="true" />
                        {/* <Dashboard /> */}
                    </>
                ) : <Unauthorized />
            }
        </>
    );
}
