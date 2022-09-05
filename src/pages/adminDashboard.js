import React from "react";
import Dashboard from "../components/admin/dashboard";
import SideNav from "../components/admin/sideNav";


export default function AdminDashboard() {
    return (
        <>
            <SideNav />
            <Dashboard/>
        </>
    );
}