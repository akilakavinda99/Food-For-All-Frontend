import React from "react";
import "../../../assets/css/dashboard.css";

export default function SideNav() {
    
        return (
            <>
                <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                    <div className="sidenav-header">
                        <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                        <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                            <img src="/assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                            <span className="ms-1 font-weight-bold text-white">Admin Dashboard</span>
                        </a>
                    </div>
                    <hr className="horizontal light mt-0 mb-2" />
                    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-white " href="http://localhost:3000/admin/dashboard">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white active bg-gradient-primary" href="http://localhost:3000/admin/regorglist">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">table_view</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Organizations</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="http://localhost:3000/admin/regfund">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">table_view</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Fundraisars</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="http://localhost:3000/admin/accepteddon">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Donations</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/billing.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Users</span>
                                </a>
                            </li>
                            <li className="nav-item mt-3">
                                <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="../pages/profile.html">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Profile</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                        <div className="mx-3">
                            <a className="btn bg-gradient-primary mt-4 w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Log out</a>
                        </div>
                    </div>
                </aside>
            </>
        );
    }