import React from "react";
import NavButton from "./NavButton";
import classes from "../admin/dashCard/DashCard"

export default function Dashboard() {
    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };
    return (
        <>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavButton />
                <div className="container-fluid py-4" onClick={toggleSidenav}>
                    <div className="row">
                        <h1>Admin Dashboard</h1>
                    </div>
                </div>
            </main>
        </>
    )
}