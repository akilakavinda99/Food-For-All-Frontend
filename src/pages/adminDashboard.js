import React from "react";
import Dashboard from "../components/admin/dashboard";
import SideNav from "../components/admin/sideNav";
import DashCard from "../components/admin/dashCard/DashCard";

export default function AdminDashboard() {
    return (
        <>
            <SideNav />
            <Dashboard/>
            <DashCard/>


            
        </>
    );
}