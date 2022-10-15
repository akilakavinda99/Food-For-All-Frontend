import React from "react";
import { getCookie } from "../../components/common/getCookie";
import Unauthorized from "../../components/common/unauthorized";
import SideNav from "../../components/organization/sideNav";
import AllRequests from "../../components/requester/allRequests";
import NavButton from "../../components/NavButton";
import { toggleSidenav } from "../../components/common/toggleSidenav";

export default function viewAllRequests() {
    return (
        <>
            {
                getCookie("uId") && getCookie("access_token") && getCookie("roles") && getCookie("roles") === "5150" ? (
                    <>
                        <SideNav requests="true" />
                        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                            <NavButton page="Requests" path="User" />
                            <div className="container-fluid py-4 " onClick={toggleSidenav}>
                                <AllRequests />
                            </div>
                        </main>
                    </>
                ) : <Unauthorized />
            }
        </>
    );
}
