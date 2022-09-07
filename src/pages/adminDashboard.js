import React from "react";
import Dashboard from "../components/admin/dashboard";
import SideNav from "../components/admin/sideNav";
import OrganizationRequestList from "../components/admin/organizationRequestList";
import DashTable from "../components/admin/dashTable/DashTable";

export default function AdminDashboard() {
    return (
        <>
            <SideNav />
            <Dashboard/>
            <DashTable/>
            <OrganizationRequestList/>

            
        </>
    );
}