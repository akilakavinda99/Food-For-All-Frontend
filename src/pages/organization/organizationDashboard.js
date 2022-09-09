import React from "react";
import Dashboard from "../../components/organization/dashboard";
import SideNav from "../../components/organization/sideNav";


export default function OrganizationDashboard() {
    return (
        <>
            <SideNav dashboard="true" />
            <Dashboard />
        </>
    );
}